const { authentication } = require('../controller/authController');
const {createOrder, getOrderByUser, getAllOrders, cancelOrder, deleteOrder} = require('../controller/orderController');
const router = require('express').Router();

router.route('/createOrder').post(authentication, createOrder);
router.route('/getByUser').get(authentication, getOrderByUser);
router.route('/getAll').get(authentication, getAllOrders);
router.route('/cancelOrder').post(authentication, cancelOrder);
router.route('/deleteOrder').delete(authentication, deleteOrder);


module.exports = router;
