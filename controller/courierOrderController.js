const db = require("../db/models/index");

const getOrderByCourier = async (req, res, next) => {
    const courierId = req.courier.id;
  
    try {
      const orders = await db.order.findAll({
        where: {
          courierInfo: courierId,
        },include : db.courier
      });
      return res.status(200).json({
        status: "Success",
        data: orders,
      });
    } catch (error) {
      return next(error);
    }
  };


const orderAcceptance = async (req, res, next) => {
  const body = req.body;
  const courierId = req.courier.id;
  const order = await db.order.findOne({
    where: { id: body.id, courierInfo: courierId },
  });
  if (!order) {
    return res.status(404).json({
      status: "fail",
      message: "Order not found",
    });
  }

  if (order.orderStatus == body.orderStatus) {
    return res
      .status(409)
      .json({ status: "fail", message: "Order is already in this status" });
  }
  order.orderStatus = body.orderStatus;
  order.save();
  return res.status(201).json({
    status: "success",
    message: "Order status updated",
    data: order,
  });
};


module.exports = {getOrderByCourier,orderAcceptance};
