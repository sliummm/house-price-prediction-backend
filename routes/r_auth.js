const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const authController = require('../controller/c_auth');

router.post(
    '/signup',
    [
        body('username').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Please enter a valid email.')
        .custom(async (email)=>{
            const user = await User.find(email);
            if (user[0].length > 0) {
                return Promise.reject('Email address already exist.');
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({ min:8 }),
    ],
    authController.signup
);

module.exports = router;