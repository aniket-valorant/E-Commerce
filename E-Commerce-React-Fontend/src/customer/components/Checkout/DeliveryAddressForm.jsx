import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Acton";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()



  const handleSubmit = (e)=> {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const address  = {
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
      streetAddress:data.get('address'),
      city:data.get('city'),
      zipcode:data.get('pincode'),
      state:data.get('state'),
      mobile:data.get('mobileNumber'),
    }
    const orderData = {address, navigate}
    try {
      dispatch(createOrder(orderData));
      console.log("Data is",)
    } catch (error) {
      console.error("Order creation failed:", error);
      alert("Failed to place order. Please try again.");
    }
  }

  return (
    <div className="mt-12">
      <Grid container spacing={4}>
        <Grid
          item
          className="border bg-white border-gray-300 rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
          xs={12}
          lg={5}
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 2, bgcolor: "rgb(14 85 253)" }}
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border bg-white border-gray-300 rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Pin code"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Mobile Number"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <div className="w-full flex justify-center">
                <Button
                  size="large"
                  variant="contained"
                  sx={{ mt: 2, px: 10, py: 1, bgcolor: "rgb(14 85 253)" }}
                  type="submit"
                >
                  Deliver Here
                </Button>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
