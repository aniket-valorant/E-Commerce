import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border border-gray-300 rounded-md bg-white">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/224/224/xif0q/dress/s/e/y/l-6104-sheetal-associates-original-imagmnekgrz42nc3.jpeg?q=90"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold truncate">
            Embellished, Printed Bollywood Chiffon Saree
          </p>
          <p className="opacity-50 text-sm">Size: M, Black</p>
          <p className="opacity-50 text-sm mt-2">Seller: ShivayStyle</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-5">
            <p className="opacity-50 line-through text-sm">₹1999</p>
            <p className="font-semibold">₹385</p>
            <p className="text-green-600 font-semibold">80% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-3">
          <IconButton sx={{mr:1, ml:-1, color:"rgb()"}}>
            <RemoveCircleOutlineSharpIcon />
          </IconButton>
          <span className="py-1 px-6 border border-gray-300 rounded-sm">1</span>
          <IconButton sx={{color:'rgb(145 85 253)'}}>
            <AddCircleOutlineSharpIcon />
          </IconButton>
          <div className=" ml-10">
            <Button sx={{color:'rgb(255 0 0)'}}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
