import React from 'react';
import { Link } from 'react-router';
import Img from '/assets/bnr-book.png'
const Banner = () => {
    return (
         <div className='max-w-[80%] mx-auto p-20 rounded-3xl bg-gray-100'>
            <div className='flex justify-between items-center'>
                <div className='space-y-6'>
                    <h1 className='font-bold font-mono text-5xl'>Books to freshen up <br/> your bookshelf</h1>
                    <Link to={"/books"} className='btn bg-[#23BE0A] text-white rounded-lg'>View the list</Link>
                </div>
                <div>
                    <img src={Img}></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;