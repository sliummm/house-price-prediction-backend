const express = require('express');
const houseController = require('../controller/c_house')
const router = express.Router();

router.get('/', houseController.getAllHouses)
router.get('/first', houseController.getFirstHosue)
router.get('/:id', houseController.getAHouse)
router.post('/', houseController.postAHouse)
router.put('/', houseController.putAHouse)
router.delete('/:id', houseController.deleteAHouse)
module.exports = router;