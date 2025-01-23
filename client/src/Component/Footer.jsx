import React from 'react'
import { asset } from '../assets/asset'

const Footer = () => {
  return (
    <div>
      <footer className='grid md:grid-cols-[2fr_1fr_1fr_1fr] sm:grid-cols-2 px-[5%] py-8'>
        {/* 1st div */}
        <div className='flex flex-col justify-start gap-3 items-start'>
<img src={asset.logo} alt="" />
<p className='max-w-[70%]'>
 Onclasses makes it easy to create, sell, market, and scale your online business with your personal brand.
</p>
<div className='flex justify-start items-center gap-4 py-2'>
  <img src={asset.facefoot} alt="" />
  <img src={asset.instafooter} alt="" />
  <img src={asset.linkdin} alt="" />
  <img src={asset.yt} alt="" />
  <img src={asset.tok} alt="" />
</div>
        </div>


        {/* 2nd div */}
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='space-y-1'>
            <h1 className='font-bold'>Product</h1>
            <ul>
              <li>Pricing</li>
              <li>Feacture</li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>Product</h1>
            <ul className='space-y-1'>
              <li>Pricing</li>
              <li>Feacture</li>
            </ul>
          </div>
        </div>


        {/* 3rd div */}
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='space-y-1'>
            <h1 className='font-bold'>Product</h1>
            <ul>
              <li>Pricing</li>
              <li>Feacture</li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>Product</h1>
            <ul className='space-y-1'>
              <li>Pricing</li>
              <li>Feacture</li>
            </ul>
          </div>
        </div>

        {/* 4th div */}
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='space-y-1'>
            <h1 className='font-bold'>Product</h1>
            <ul>
              <li>Pricing</li>
              <li>Feacture</li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>Product</h1>
            <ul className='space-y-1'>
              <li>Pricing</li>
              <li>Feacture</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
