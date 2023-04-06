const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
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