const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/reservationController');

router.post('/',reservationController.reservation_create);
router.get('/getAll',reservationController.index);
router.delete('/:id',reservationController.reservation_delete);

module.exports = router;