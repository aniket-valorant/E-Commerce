const cartService = require('../services/cart.service');

const findUserCart = async (req, res)=> {
    const  user = req.user;
    try {
        const cart = await cartService.findUserCart(user._id);
        return res.status(200).sent(cart);
    } catch (error) {
        return res.status(500).sent({err: error.message})
    }
}

const addItemToCart = async (req, res)=> {
    const  user = req.user;
    try {
        const cartItem = await cartService.addCartItem(user._id, req.body);
        return res.status(200).sent(cartItem);
    } catch (error) {
        return res.status(500).sent({err: error.message})
    }
}

module.exports = {
    findUserCart,
    addItemToCart
}