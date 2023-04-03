const User = require('../models/user');

exports.getUserInfo = async (req,res,next) =>{
    try {
        const [user] = await User.fetchUserInfo(req.params.username);
        res.status(200).json(user)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.getPassWord = async (req, res, next) =>{
    try{
        const [password] = await User.fetchPassword(req.params.username);
        res.status(200).json(password);
    } catch(err){
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.postUser = async (req,res,next) => {
    try{
        const postResponse = await User.addUser(
            req.body.username,
            req.body.email,
            req.body.company,
            req.body.password
        )
        res.status(200).json(postResponse)
    } catch(err){
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.putUser = async (req,res,next)=>{
    try{
        const putResponse = await User.updateUser(
            req.body.username,
            req.body.email,
            req.body.company,
            req.body.password,
            req.params.uid
        )
        res.status(201).json(putResponse)
    } catch(err){
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}