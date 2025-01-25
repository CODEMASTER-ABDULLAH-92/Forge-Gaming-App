import React, { useState } from 'react'
import { asset } from '../assets/asset'

const Shop = () => {
    const [toggleCategory, setToggleCategory] = useState(false);
    return (
        <div className='py-10 px-[5%]'>
            {/* SideBar */}
            <div className='max-w-64 border-r-2 h-screen pr-4'>

                {/* Categories */}
                <h1 className={`flex justify-between items-center cursor-pointer font-semibold text-2xl`}>
                    Categories 
                    <img 
                        src={asset.Vector} 
                        className={`${toggleCategory ? '' : 'rotate-180 transition-all'}`} 
                        alt="" 
                        onClick={() => setToggleCategory(!toggleCategory)} 
                    />
                </h1>
                <div className='relative'>
                    <input 
                        type="text" 
                        className={`py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950 ${toggleCategory ? 'block' : 'hidden'}`} 
                        placeholder='Search' 
                    />
                    <img 
                        src={asset.search} 
                        className='absolute mix-blend-color-burn top-0' 
                        alt="" 
                    />
                </div>
            </div>
            {/* other */}
        </div>
    )
}

export default Shop
