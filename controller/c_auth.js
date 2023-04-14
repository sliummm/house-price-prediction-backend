const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req,res,next)=>{
    const err = validationResult(req);

    if (!err.isEmpty()) return;

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const company = req.body.company;

    try {
        const hashedPass = await bcrypt.hash(password,12);

        const userInfo = {
            username: username,
            email: email,
            company: company,
            password: hashedPass,
        };

        const result = await User.save(userInfo);
        res.status(200).json({message: 'User Signed Up.'});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.login = async(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password

    try {
        const user = await User.find(email);
        console.log(user[0])


        if(user[0].length !==1 ){
            const error = new Error('Email not found.');
            error.statusCode = 401;
            throw error;
        }


        const storedUser = user[0][0];
        console.log(req.body.password)
        console.log(storedUser.password);

        const isEqual = await bcrypt.compare(password, storedUser.password);
        console.log(isEqual + 'password');


        if (!isEqual) {
            const error = new Error('Password is incorect.');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                uid: storedUser.uid,
                username: storedUser.username,
                email: storedUser.email,
                company: storedUser.company
            },
            'secertfortoken',
            {
                expiresIn:'8h'
            }
        )

        res.status(200).json({ token: token, user:storedUser });

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};