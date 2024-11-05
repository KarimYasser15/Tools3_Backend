const db = require("../db/models/index");
const user = require("../db/models/user");

const createOrder = async (req, res, next) => {
  const body = req.body;
  const userId = req.user.id;

  const newOrder = await db.order.create({
    pickUpLocation: body.pickUpLocation,
    dropOffLocation: body.dropOffLocation,
    packageDetails: body.packageDetails,
    deliveryTime: body.deliveryTime,
    createdBy: userId,
    orderStatus: "Pending",
  });

  return res.status(201).json({
    status: "Order Created",
    data: newOrder,
  });
};

const getOrderByUser = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const orders = await db.order.findAll({
      where: {
        createdBy: userId,
      },include : db.user
    });

    return res.status(200).json({
      status: "Success",
      data: orders,
    });
  } catch (error) {
    return next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await db.order.findAll({include: db.user});

    return res.status(200).json({
      status: "Success",
      data: orders,
    });
  } catch (error) {
    return next(error);
  }
};

const cancelOrder = async (req, res, next) => {
  const userId = req.user.id;
  const body = req.body;

  try {
    const order = await db.order.findOne({
      where: {
        createdBy: userId,
        id: body.id,
      },
    });

    if (!order) {
      return res.status(404).json({
        status: "fail",
        message: "Order not found",
      });
    }

    if (order.orderStatus == "Cancelled") {
      return res
        .status(409)
        .json({ status: "fail", message: "Order is already cancelled" });
    }

    order.orderStatus = "Cancelled";
    await order.save();

    return res.status(200).json({
      status: "success",
      message: "Order cancelled successfully",
      data: order,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  const userId = req.user.id;
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

module.exports = { createOrder, getOrderByUser, getAllOrders, cancelOrder, deleteOrder };
