const express = require('express');
const accountController = require('../controller/c_account');
const router = express.Router();

router.get('/:uid', accountController.getAllAccounts);
router.get('/useraccount/:aid',accountController.getAccountById);
router.post('/', accountController.postAccount);
router.put(':aid', accountController.putAccount);
router.delete('/:aid', accountController.deleteAccount);
module.exports = router;