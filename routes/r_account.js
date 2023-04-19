const express = require('express');
const accountController = require('../controller/c_account');
const {body} = require('express-validator')
const router = express.Router();

router.get('/:uid', accountController.getAllAccounts);
router.get('/useraccount/:aid',accountController.getAccountById);
router.post('/', 
    [
        body('account_username').trim().not().isEmpty(),
        body('account_password').trim().not().isEmpty()
    ],
    accountController.postAccount);
router.put('/:aid', 
    [
        body('account_username').trim().not().isEmpty(),
        body('account_password').trim().not().isEmpty()
    ],
    accountController.putAccount);
router.delete('/:aid', accountController.deleteAccount);
module.exports = router;