import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store)

  useEffect(() => {
    dispatch(getCart())
  }, [cart.updateCartItem, cart.deleteCartItem])
  const handleChackout = ()=> {
    navigate('/checkout?step=2')
  }

  if(cart?.cart?.cartItems)
  console.log("cart is ", cart?.cart?.cartItems)

  return (
    <div className="py-6 ">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-6">
          {cart?.cart?.cartItems?.map((item) =>  <CartItem key={item?._id} item={item} /> ) || [] }
          
        </div>
        <div className="px-5 sticky  top-10 h-[100vh] mt-5 lg:mt-0">
          <div className="border bg-white border-gray-200">
            <p className="uppercase font-bold opacity-60 p-4">Price Detail</p>
            <hr className="opacity-10" />
            <div className="space-y-3 font-medium pb-5 ">
              <div className="flex justify-between px-7 pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between px-7 pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600 font-medium">- ₹{cart.cart?.discounte}</span>
              </div>
              <div className="flex justify-between px-7 pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <hr className="opacity-10" />
              <div className="flex justify-between text-lg font-bold px-7 pt-1 text-black">
                <span>Total Amount</span>
                <span>₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
          </div>
            <Button
            onClick={handleChackout}
              variant="contained"
              color="secondary"
              sx={{ py: ".7rem", width: "100%", marginTop:1}}
            >
              Checkout
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
