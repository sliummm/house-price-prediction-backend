const express = require('express');
const houseController = require('../controller/c_house')
const router = express.Router();

router.get('/', houseController.getAllHouses)
router.post('/', houseController.postAHouse)

module.exports = router;