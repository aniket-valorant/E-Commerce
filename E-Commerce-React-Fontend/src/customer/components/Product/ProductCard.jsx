import React from "react";
import "./ProductCard.css";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product._id}`)} className="bg-white product-card w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem] my-3 w-full object-cover object-left-top flex justify-center">
        <img className="h-[20rem]"
          src={product.imageUrl}
          alt="" 
        />
      </div>

      <div className="text-part bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="truncate">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold"><CurrencyRupeeOutlinedIcon fontSize="small"/>{product.discountedPrice}</p>
          <p className="line-through opacity-50"> Rs {product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPercent}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
