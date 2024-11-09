const { authentication } = require('../controller/authController');
const {createOrder, getOrderByUser, getAllOrders, cancelOrder} = require('../controller/orderController');
const router = require('express').Router();

router.route('/createOrder').post(authentication, createOrder);
router.route('/getByUser').get(authentication, getOrderByUser);
router.route('/cancelOrder').put(authentication, cancelOrder);

module.exports = router;
