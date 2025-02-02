import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md bg-white border border-gray-300'>
        <AddressCard />
      </div>
      <div className="py-6 ">
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2 space-y-6">
          {[1,1,1,1,1].map((item, idx) =>  <CartItem key={idx} /> )}
          
        </div>
        <div className="px-5 sticky  top-10 h-[100vh] mt-5 lg:mt-0">
          <div className="border bg-white border-gray-200">
            <p className="uppercase font-bold opacity-60 p-4">Price Detail</p>
            <hr className="opacity-10" />
            <div className="space-y-3 font-medium pb-5 ">
              <div className="flex justify-between px-7 pt-3 text-black">
                <span>Price</span>
                <span>₹1,999</span>
              </div>
              <div className="flex justify-between px-7 pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600 font-medium">- ₹1614</span>
              </div>
              <div className="flex justify-between px-7 pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <hr className="opacity-10" />
              <div className="flex justify-between text-lg font-bold px-7 pt-1 text-black">
                <span>Total Amount</span>
                <span>₹385</span>
              </div>
            </div>
          </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ py: ".7rem", width: "100%", marginTop:1}}
            >
              Checkout
            </Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary