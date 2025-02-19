import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Acton";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const {order} = useSelector (store => store)
  
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId, dispatch]);
  if(order?.order?.orderItems)
  console.log("Order is ", order?.order?.orderItems)
  

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md bg-white border border-gray-300">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="py-6 ">
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2 space-y-6">
            {order.order?.orderItems?.map((item, idx) => (
              <CartItem key={idx} item={item}/>
            ))}
          </div>
          <div className="px-5 sticky  top-10 h-[100vh] mt-5 lg:mt-0">
            <div className="border bg-white border-gray-200">
              <p className="uppercase font-bold opacity-60 p-4">Price Detail</p>
              <hr className="opacity-10" />
              <div className="space-y-3 font-medium pb-5 ">
                <div className="flex justify-between px-7 pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order?.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between px-7 pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600 font-medium">- ₹{order?.order?.discounte}</span>
                </div>
                <div className="flex justify-between px-7 pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <hr className="opacity-10" />
                <div className="flex justify-between text-lg font-bold px-7 pt-1 text-black">
                  <span>Total Amount</span>
                  <span>₹{order?.order?.totalDiscountPrice}</span>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ py: ".7rem", width: "100%", marginTop: 1 }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
