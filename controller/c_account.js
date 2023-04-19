const  Account = require('../models/account');
const { validationResult } = require('express-validator')

exports.getAllAccounts = async (req,res,next)=>{
    try {
        const [allAccounts] = await Account.fetchAll(req.params.uid);
        res.status(200).json(allAccounts)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.getAccountById = async (req,res,next)=>{
    try {
        console.log(req.params)
        const [account] = await Account.fetchById(req.params.aid);
        res.status(200).json(account)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.postAccount = async (req,res,next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) return;
    console.log(errors);

    const userid = req.body.userid;
    const account_type = req.body.account_type;
    const account_username = req.body.account_username;
    const account_password = req.body.account_password;
    const account_comment = req.body.account_comment;

    try {
        const account = {
            userid: userid,
            account_type:account_type,
            account_username:account_username,
            account_password:account_password,
            account_comment:account_comment
        }
        const postResponse = await Account.addAccount(account);
        res.status(200).json({message:'Account added'});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.putAccount = async (req,res,next) => {
    try {
        const account = {
            aid: req.body.aid,
            account_type:req.body.account_type,
            account_username:req.body.account_username,
            account_password:req.body.account_password,
            account_comment:req.body.account_comment
        }
        console.log(req.body)
        const putResponse = await Account.updateAccount(account)
        res.status(200).json({message:'Account updated'});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}

exports.deleteAccount = async (req,res,next)=>{
    try {
        const deleteResponse = await Account.deleteAccount(req.params.aid);
        res.status(200).json({message:"Account Deleted"});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        } 
        next(err);
    }
}
