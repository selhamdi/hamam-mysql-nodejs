const express = require('express');
const router = express.Router();
const clientController = require('../Controllers/clientController');

router.post('/signup',clientController.addClient);
router.post('/signin',clientController.signInclient);

module.exports = router;