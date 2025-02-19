import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    // console.log("Item is",item)
    const data = {data:{quantity:item?.quantity + num}, cartItemId:item?._id}
    dispatch(updateCartItem(data))
  }
  
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id))
  }

  return (
    <div className="p-5 shadow-lg border border-gray-300 rounded-md bg-white">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl || 'fallback-image-url.jpg'} 
            alt= {item?.product?.title || 'fallback-image-title'} 
  
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold truncate">
            {item.product?.title || "Unknown Product"}
          </p>
          <p className="opacity-50 text-sm">Size: {item?.size || 'N/A'}, {item?.product?.color || 'N/A'}</p>
          <p className="opacity-50 text-sm mt-2">Seller: {item?.product?.brand || "Unknown Seller" }</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-5">
            <p className="opacity-50 line-through text-sm">₹{item.price}</p>
            <p className="font-semibold">₹{item?.discountedPrice || "0"}</p>
            <p className="text-green-600 font-semibold">{item?.product?.discountPercent}% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-3" >
          <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item?.quantity <= 1} sx={{mr:1, ml:-1, color:"rgb()"}}>
            <RemoveCircleOutlineSharpIcon />
          </IconButton>
          <span className="py-1 px-6 border border-gray-300 rounded-sm">
            {item.quantity}
          </span>
          <IconButton sx={{color:'rgb(145 85 253)'}} onClick={() => handleUpdateCartItem(1)}>
            <AddCircleOutlineSharpIcon />
          </IconButton>
          <div className=" ml-10">
            <Button onClick={handleRemoveCartItem} sx={{color:'rgb(255 0 0)'}}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
