const db = require("../db/models/index");


const getAllOrders = async (req, res, next) => {
    try {
      const orders = await db.order.findAll({include: [
        { model: db.user },    // Include associated user
        { model: db.courier }  // Include associated courier
      ]});
  
      return res.status(200).json({
        status: "Success",
        data: orders,
      });
    } catch (error) {
      return next(error);
    }
  };

const deleteOrder = async (req, res, next) => {
    const body = req.body;
    try {
      const order = await db.order.findOne({
        where: {
          id: body.id,
        },
      });
  
      if (!order) {
        return res.status(404).json({
          status: "fail",
          message: "Order not found",
        });
      }
  
      await order.destroy();
      return res.status(200).json({
        status: "success",
        message: "Order deleted successfully",
      });
    } catch (error) {
      return next(error);
    }
  };

  const assignOrder = async (req, res, next) => {
    const body = req.body;
    const courierEmail = body.email;
    const courier = await db.courier.findOne({ where: { email: courierEmail } });
    if (!courier) {
      return res.status(404).json({
        status: "fail",
        message: "Courier doesn't exist",
      });
    }
    const order = await db.order.findOne({
      where: { id: body.id },
    });
    if (!order) {
      return res.status(404).json({
        status: "fail",
        message: "Order not found",
      });
    }
    if(order.orderStatus == "Cancelled")
    {
        return res
        .status(403)
        .json({ status: "fail", message: "Order is Cancelled" });
    }
    if (order.courierInfo == courier.id) {
      return res
        .status(409)
        .json({ status: "fail", message: "Courier is already assigned" });
    }
    order.orderStatus = "Pending";
    order.courierInfo = courier.id;
    order.save();
    return res.status(201).json({
      status: "success",
      message: "Courier has been assigned",
      data: order,
    });
  };

  const orderStatusControl = async (req, res, next) => {
    const body = req.body;
    const order = await db.order.findOne({
      where: { id: body.id},
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
  module.exports = {deleteOrder, getAllOrders, assignOrder, orderStatusControl};