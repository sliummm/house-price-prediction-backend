const express = require('express');
const userController = require('../controller/c_user');
const router = express.Router();

router.get('/getpass/:username', userController.getPassWord)
router.post('/postuser', userController.postUser)
router.put('/putuser/:uid', userController.putUser)