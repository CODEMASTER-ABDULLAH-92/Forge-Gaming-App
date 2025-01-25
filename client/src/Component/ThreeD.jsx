import React from 'react'
import { battle, asset } from '../assets/asset'
import { Link, useNavigate } from 'react-router-dom'

const ThreeD = () => {
  const navigate = useNavigate();

  return (
    <div className='px-[5%]'>
      <div className='flex justify-between items-center'>

      <div>
      <h1 className="font-semibold text-4xl text-start">
Shop Iconic
        <span className="text-transparent bg-gradient-to-r pl-2 from-[#ff1b6b] to-[#2472fc] bg-clip-text">
3D Characters
        </span>
      </h1>
      <p className='text-[#a8aebf] pt-2'>Detailed, Handcrafted Figures at Affordable Prices</p>
      </div>

      <button onClick={()=>navigate('/Shop')} className='md:flex self-center border-2 hidden border-red-500 gap-3 my-5  py-3 px-10 rounded-3xl'> <img src={asset.arr} className='self-center' alt="" /> View All</button>
      </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-center my-16' >
      {
        battle.slice(0,8).map((item,index)=>{
          return (

  <Link to={`/detail/${item._id}`} key={item._id} className='bg-[#1b1b1b] p-4 rounded-xl justify-start py-5 items-start flex flex-col'>
              <img src={item.image} className='self-center' alt="" />
              <p className='pl-4 pt-2 text-xl font-semibold'>{item.gameName}</p>
              <p className='pl-4 pt-2 text-[16px]'>{item.price}</p>
              <button className='flex self-center border-2 border-red-500 gap-3 my-5 px-[21%] py-3 rounded-3xl'> <img src={asset.cart2} alt="" /> Add To cart</button>
            </Link>
          )
        })
      }
    </div>
    </div>
  )
}

export default ThreeD
