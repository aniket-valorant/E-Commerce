import React from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const HomeSectionCard = ({ product }) => {
  return (
    <div className="home-section-card flex flex-col items-center mb-3  bg-white cursor-pointer rounded-lg overflow-hidden w-60 mx-1 p-5 ">
      <div className="h-[13rem] w-[10]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.img_url}
          alt=""
        />
      </div>
      <div className="w-full">
        <h3 className="text-lg font-serif font-medium text-gray-500 truncate">{product.name}</h3>
        <p className="mt-2 font-sans text-sm text-gray-600 truncate">{product.description}</p>
        <p className=" font-mono text-gray-700">{product.color}</p>
        <h3 className="text-xl font-semibold text-gray-900 truncate"> <CurrencyRupeeIcon fontSize="small"/>{product.price}</h3>
      </div>
    </div>
  );
};

export default HomeSectionCard;
