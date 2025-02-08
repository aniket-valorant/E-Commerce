const Address = require("../model/address.model.js");
const Order = require("../model/order.model.js");
const OrderItem = require("../model/orderItems.model.js");
const cartService = require("../services/cart.service.js");

async function createOrder(user, shippAddress) {
  let address;

  if (shippAddress._id) {
    let existAddress = await Address.findById(shippAddress._id);
    address = existAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    await address.save();
    user.address.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (let item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      discountedPrice: item.discountedPrice,
      userId: item.userId,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);

    const createdOrder = new Order({
      user,
      orderItems,
      shippingAddress: address,
      totalPrice: cart.totalPrice,
      totalDiscountPrice: cart.totalDiscountedPrice,
      totalItem: cart.totalItem,
      discounte: cart.discounte
    });

    const savedOrder = await createdOrder.save();
    return savedOrder;
  }
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.paymentStatus = "COMPLETED";

  return await order.save();
}

async function confirmOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shipOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancleOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELLED";

  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate("shippingAddress")
    .populate({ path: "orderItems", populate: "product" });

  return order;
}

async function userOrderHistory(userId) {
  try {
    const orders = await Order.find({
      user: userId,
      orderStatus: "PLACED",
    }).populate({
      path: "orderItems",
      populate: {
        path: "product",
      },
    }).lean;
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find().populate({
    path: "orderItems",
    populate: {
      path: "product",
    },
  }).lean;
}


async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id)
}

module.exports = {
    createOrder,
    placeOrder,
    confirmOrder,
    shipOrder,
    deliverOrder,
    cancleOrder,
    findOrderById,
    deleteOrder,
    getAllOrders,
    userOrderHistory
}