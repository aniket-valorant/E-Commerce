import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';

const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="bg-white my-10 p-5" >
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-15 my-5 ">
        <OrderTracker activeStep={3} /> 
      </div>

      <Grid container >

        {[1,1,1,1,1].map((item, inx)=> <div className="my-5 block w-full bg-white">

        <Grid item container key={inx}  className=" shadow-xl  rounded-md p-5 border-gray-300" sx={{alignItems:'center', justifyContent:'space-between'}}>
            <Grid item xs={6}>
                <div className="flex items-center space-x-4">
                    <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim2.flixcart.com/image/832/832/xif0q/jean/d/n/h/30-24175656-mast-harbour-original-imagufzmgtbgvb4r.jpeg?q=70&crop=false" alt="" />

                    <div className="space-y-2 ml-5">
                        <p className="font-semibold">Men Tapered Fit Mid Rise Blue Jeans</p>
                        <p className="space-x-5 opacity-50 text-xs font-semibold"> <span >Color: Blue</span></p>
                        <p>Mast & Harbour </p>
                        <p>₹696</p>
                    </div>
                </div>

            </Grid>

            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                    <StarIcon fontSize="large"  className="px-2 text-5xl" />
                    <span>Rate & Review Prouct</span>
                </Box>
            </Grid>
        </Grid>
        </div>
        )}
      </Grid>
    </div>
  );
};

export default OrderDetail;
