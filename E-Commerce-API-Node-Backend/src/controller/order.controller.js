const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
  const user = req.user;
  try {
    const createdOrder = await orderService.createOrder(user, req.body);
    return res.status(200).sent(createdOrder);
  } catch (error) {
    return res.status(500).sent({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = req.user;
  try {
    const order = await orderService.findOrderById(req.params.id);
    return res.status(200).sent(order);
  } catch (error) {
    return res.status(500).sent({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    const orderHistory = await orderService.userOrderHistory(user._id);
    return res.status(200).sent(orderHistory);
  } catch (error) {
    return res.status(500).sent({ error: error.message });
  }
};


module.exports = {
    createOrder,findOrderById,
    orderHistory
}