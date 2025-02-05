const orderService = require ('../services/order.service.js');

const getAllOrders = async (req, res) => {
    try {
        const orders = orderService.getAllOrders();
        return res.status(200).sent(orders);
    } catch (err) {
        return res.status(500).sent({error: err.message})
    }
}

const confirmedOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = orderService.confirmOrder(orderId);
        return res.status(200).sent(order);
    } catch (err) {
        return res.status(500).sent({error: err.message})
    }
}

const shippOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = orderService.shipOrder(orderId);
        return res.status(200).sent(order);
    } catch (err) {
        return res.status(500).sent({error: err.message})
    }
} 

const deliverOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = orderService.deliverOrder(orderId);
        return res.status(200).sent(order);
    } catch (err) {
        return res.status(500).sent({error: err.message})
    }
}

const cancleOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = orderService.cancleOrder(orderId);
        return res.status(200).sent(order);
    } catch (err) {
        return res.status(500).sent({error: err.message})
    }
}

const deleteOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = orderService.deleteOrder(orderId);
        return res.status(200).sent(order);
    } catch (err) {
        return res.status(500).sent({error: err.message})
    }
}

module.exports = {
    cancleOrder,
    confirmedOrder,
    deleteOrder,
    deliverOrder,
    getAllOrders,
    shippOrder
}