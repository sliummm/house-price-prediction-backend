const express = require('express');
const accountController = require('../controller/c_account');
const router = express.Router();

router.get('/accounts/:uid', accountController.getAllAccounts);
router.get('/account/:aid',accountController.getAccountById);
router.post('/newaccount', accountController.postAccount);
router.put('/updateaccount/:aid', accountController.putAccount);
router.delete('/deletaccount/:aid', accountController.deleteAccount);