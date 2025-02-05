const CartItem = require("../model/cartItem.model");
const userService = require("../services/user.service");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);

    if (!item) {
      throw new Error("Cart item not found:" + cartItemId);
    }

    const user = await userService.findUserById(item.userId);

    if (!user) {
      throw new Error("User not Found : " + userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedItem = await item.save();
      return updatedItem;
    } else {
      throw new Error("Both user are not same to update the item");
    }
  } catch (error) {
    throw new Error({ err: error.message });
  }
}

async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    await CartItem.findByIdAndDelete(cartItem.id);
  } else {
    throw new Error("You cant remove another user cart Item");
  }
}

async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId);
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("Cart Item NOt found With This Id: " + cartItemId);
  }
}

module.exports = {
  updateCartItem,
  removeCartItem,
  findCartItemById,
};
