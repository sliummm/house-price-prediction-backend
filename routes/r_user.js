const express = require('express');
const userController = require('../controller/c_user');
const router = express.Router();

router.get('/:username', userController.getPassWord);
router.get('/userinfo/:username', userController.getUserInfo);
router.post('/', userController.postUser);
router.put('/:uid', userController.putUser);
module.exports = router;