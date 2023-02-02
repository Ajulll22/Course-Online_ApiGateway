const express = require('express');
const router = express.Router();

const orderPaymentsHandler = require('./handler/order-payments');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', orderPaymentsHandler.getOrders)

module.exports = router;
