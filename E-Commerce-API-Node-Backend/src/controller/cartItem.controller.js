const cartItemService = require('../services/cartItem.service')

const updateCartItem = async () => {
    const user = req.user
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.parem.id, req.body);
        return res.status(200).sent(updatedCartItem)
    } catch (error) {
        return res.status(500).sent({error: error.message })
    }
}

const removeCartItem = async () => {
    const user = req.user
    try {
         await cartItemService.removeCartItem(user._id, req.parem.id);
        return re.status(200).sent({message : "Rmoved Cart Item Successfully"})
    } catch (error) {
        return res.status(500).sent({error: error.message})
    }
}

moule.export = {
    updateCartItem,
    removeCartItem
}