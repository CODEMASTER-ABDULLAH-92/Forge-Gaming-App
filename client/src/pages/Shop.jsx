import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { motion } from 'framer-motion';

const Shop = () => {
    const [toggleCategory, setToggleCategory] = useState(false);
    const [toggleCategory1, setToggleCategory1] = useState(false);
    const [toggleCategory2, setToggleCategory2] = useState(false);
    const [rangeValue, setRangeValue] = useState(50);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

    const toggleAnimation = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    };

    return (
        <div className='py-10 px-[5%] flex'>
            {/* Sidebar */}
            <div className='max-w-64 border-r-2 h-screen pr-4'>
                {/* Categories */}
                <div className='mb-4'>
                    <h1
                        className='flex justify-between items-center cursor-pointer font-semibold text-2xl'
                        onClick={() => setToggleCategory(!toggleCategory)}
                    >
                        Categories
                        <motion.img
                            src={asset.Vector}
                            animate={{ rotate: toggleCategory ? 0 : 180 }}
                            transition={{ duration: 0.3 }}
                            alt='Toggle'
                        />
                    </h1>
                    <motion.div
                        initial='hidden'
                        animate={toggleCategory ? 'visible' : 'hidden'}
                        variants={toggleAnimation}
                    >
                        <div className='relative'>
                            <input
                                type='text'
                                className='py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950'
                                placeholder='Search'
                            />
                            <img
                                src={asset.search}
                                className='absolute top-3 left-3'
                                alt='Search'
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scale */}
                <div className='mb-4'>
                    <h1
                        className='flex justify-between items-center cursor-pointer text-[#fd4960] font-semibold text-2xl'
                        onClick={() => setToggleCategory1(!toggleCategory1)}
                    >
                        Scale
                        <motion.img
                            src={asset.Vector}
                            animate={{ rotate: toggleCategory1 ? 0 : 180 }}
                            transition={{ duration: 0.3 }}
                            alt='Toggle'
                        />
                    </h1>
                    <motion.ul
                        initial='hidden'
                        animate={toggleCategory1 ? 'visible' : 'hidden'}
                        variants={toggleAnimation}
                    >
                        <li className='text-center'>25mm</li>
                        <li className='text-center'>50mm</li>
                        <li className='text-center'>75mm</li>
                    </motion.ul>
                </div>

                {/* Budget */}
                <div className='mb-4'>
                    <h1
                        className='flex justify-between items-center cursor-pointer font-semibold text-2xl'
                        onClick={() => setToggleCategory2(!toggleCategory2)}
                    >
                        Budget
                        <motion.img
                            src={asset.Vector}
                            animate={{ rotate: toggleCategory2 ? 0 : 180 }}
                            transition={{ duration: 0.3 }}
                            alt='Toggle'
                        />
                    </h1>
                    <motion.div
                        initial='hidden'
                        animate={toggleCategory2 ? 'visible' : 'hidden'}
                        variants={toggleAnimation}
                    >
                        <div className='flex items-center justify-between gap-2'>
                            <label htmlFor='from'>
                                From
                                <input
                                    id='from'
                                    type='number'
                                    className='py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950'
                                    placeholder='Min'
                                />
                            </label>
                            <span className='flex self-center'>-</span>
                            <label htmlFor='to'>
                                To
                                <input
                                    id='to'
                                    type='number'
                                    className='py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950'
                                    placeholder='Max'
                                />
                            </label>
                        </div>
                    </motion.div>
                </div>

                {/* Range Input */}
                <div className='py-4'>
                    <input
                        type='range'
                        min='0'
                        max='100'
                        value={rangeValue}
                        onChange={handleRangeChange}
                        className='w-full h-2 bg-[#fd4960] rounded-lg outline-none cursor-pointer'
                    />
                    <div className='flex justify-between text-sm text-gray-600'>
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div className='mt-2 text-center text-sm text-gray-700'>
                        Selected value: {rangeValue}
                    </div>
                </div>

                {/* Custom Input */}
                <label htmlFor='custom'>
                    Add Custom
                    <input
                        type='number'
                        id='custom'
                        className='py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950'
                    />
                </label>
            </div>
        </div>
    );
};

export default Shop;