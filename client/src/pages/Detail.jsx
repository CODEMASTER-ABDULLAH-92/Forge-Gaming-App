import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { asset, battle } from '../assets/asset';

const Detail = () => {
  const { id } = useParams(); // Extracts the dynamic `id` from the URL
  const [data, setData] = useState(null); // Initialize as `null`

  const fetchData = () => {
    const foundItem = battle.find((item) => item._id === id); // Use `find` for better performance
    if (foundItem) {
      setData(foundItem);
      console.log(foundItem);
    }
  };
  
  useEffect(() => {
    fetchData(); // Fetch data whenever `id` changes
  }, [id]);

  return (
    <div className='min-h-full relative'>
        <div className='flex justify-center items-center'>
        <img src={asset.bannaer} alt="" />
        <h1 className='text-6xl font-semibold text-center absolute'>Chaos Battletome</h1>
        </div>

      {data ? ( // Conditional rendering to avoid errors if `data` is null
        <div className='px-[5%] py-10 flex'>

            <div  className='flex flex-1 gap-3 items-center max-w-[50%]'>
                <div>
                    {
                        data.ImgArray.map((item)=>{
                            return (
                                <div className='py-2'>
<div
  className="p-[2px] max-w-[100px] rounded-lg border-[1px] border-transparent"
  style={{
    background: "linear-gradient(to right, #FF1B6B, #2472FC)",
    backgroundSize: "200% 200%",
    animation: "gradient-animation 3s ease infinite",
  }}
>
  <img
    src={item}
    className="w-full h-full rounded-lg"
    alt=""
  />
</div>

                                </div>
                            )
                        })
                    }
                </div>
                <img src={data.image}  className=' min-h-[80%] object-center' alt="" />
            </div>

            <div className='max-w-[50%] flex flex-col justify-center items-start'>
<h1>{data.gameName}</h1>
<p>{data.description}</p>
<h1>{data.price}</h1>
            </div>
        </div>
      ) : (
        <p>Loading...</p> // Display a loading state if data is null
      )}
    </div>
  );
};

export default Detail;
