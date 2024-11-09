const {signup, login, authentication} = require('../controller/courierController');
const {getOrderByCourier,orderAcceptance} = require('../controller/courierOrderController');

const router = require('express').Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/orderAcceptance').put(authentication, orderAcceptance);
router.route('/getOrders').get(authentication, getOrderByCourier);

module.exports = router;