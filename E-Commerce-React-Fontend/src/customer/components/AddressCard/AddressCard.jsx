import React from 'react'

const AddressCard = ({address}) => {
    
  return (
    <div >
      <div className='space-y-3'>
        <p className='font-semibold'>Name: {address?.firstName} {address?.lastName}</p>
        <p>City: {address?.city}, State: {address?.state}, Pin code {address?.zipcode}</p>
        <p>Address: {address?.streetAddress}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number: {address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard