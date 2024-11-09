const {signup, login, authentication} = require('../controller/adminController');
const {deleteOrder, getAllOrders, assignOrder, orderStatusControl} = require('../controller/adminOrderController');

const router = require('express').Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/deleteOrder').delete(authentication, deleteOrder);
router.route('/getAllOrders').get(authentication, getAllOrders);
router.route('/assignOrder').put(authentication, assignOrder);
router.route('/orderStatusControl').put(authentication, orderStatusControl);
module.exports = router;