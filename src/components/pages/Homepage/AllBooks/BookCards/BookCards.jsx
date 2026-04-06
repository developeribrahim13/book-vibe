import React from 'react';
import { CiStar } from "react-icons/ci";
const BookCards = ({books}) => {
    return (
        <div className='grid grid-cols-3 gap-5 max-w-[80%] mx-auto mt-4 mb-7'>
            {
                books.map(book=>(
                 <div className='rounded-2xl overflow-hidden p-3 shadow space-y-3'>
                    <div className='bg-gray-100 rounded-2xl flex justify-center items-center py-10'>
                        <img className='w-[150px] h-[200px]' src={book.image}></img>
                    </div>
                    <div className='flex items-center gap-3'>
                        {
                            book.tags.map(el=>(
                                <div className='badge badge-success badge-soft'>{el}</div>
                            ))
                        }
                    </div>
                    <h1 className='font-bold text-xl font-sans'>{book.bookName}</h1>
                    <p className='font-semibold text-gray-500'>By : {book.author}</p>
                    <div className='border-t border-dashed border-gray-300 flex justify-between items-center py-1.5'>
                        <p className='font-medium text-gray-400'>{book.category}</p>
                        <p className='flex items-center gap-1 font-medium text-gray-400'>{book.rating}<CiStar /></p>
                    </div>
                 </div> 
                ))
            }
        </div>
    );
};

export default BookCards;