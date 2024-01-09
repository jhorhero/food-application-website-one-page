import React from 'react';

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
          
           
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGD's Out</p>
                    <p className='px-4'>Through 8/26</p>
                    <button className='mx-2 border-white bg-white text-black  mt-4 rounded-lg px-4'>Order Now</button>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src="https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Resturants</p>
                    <p className='px-4'>Added Daily</p>
                    <button className='mx-2 border-white bg-white text-black  mt-4 rounded-lg px-4'>Order Now</button>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src="https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts </p>
                    <p className='px-4'>Tasty Treats</p>
                    <button className='mx-2 border-white bg-white text-black  mt-4 rounded-lg px-4'>Order Now</button>

                </div>
                <img className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src="https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    );
};

export default HeadlineCards;