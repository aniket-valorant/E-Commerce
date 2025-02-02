import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className="bg-white p-5 hover:shadow-lg  rounded-lg">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/jean/d/n/h/30-24175656-mast-harbour-original-imagufzmgtbgvb4r.jpeg?q=70&crop=false"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p className="">Men Tapered Fit Mid Rise Blue Jeans</p>
              <p className="opacity-60 text-xs font-semibold">Size: M</p>
              <p className="opacity-60 text-xs font-semibold">Color: Blue</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹999</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">
                Your item Has been delivered
              </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
