import React from 'react'
import { asset } from '../assets/asset'

const ReturnPolicy = () => {
  return (
    <div className='px-[5%] py-10 flex justify-center md:flex-row flex-col items-center gap-14'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <img src={asset.delivery} alt="" />
        <h1 className='text-2xl font-semibold text-white'>Free and Fast Delivery</h1>
        <p className='text-gray-400'>Free Orders for all delivery above to $140</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-3'>
        <img src={asset.handfree} alt="" />
        <h1 className='text-2xl font-semibold text-white'>24/7 Customer Service</h1>
        <p className='text-gray-400'>Friendly 24/7 Customer Servises</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-3'>
        <img src={asset.tick} alt="" />
        <h1 className='text-2xl font-semibold text-white'>Money Back Guarantee</h1>
        <p className='text-gray-400'>We return money within30 days</p>
      </div>
    </div>
  )
}

export default ReturnPolicy
