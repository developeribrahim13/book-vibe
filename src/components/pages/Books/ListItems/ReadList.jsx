import React, { useContext } from 'react';
import { BookContext } from '../../../../context/BookProvider';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import { Link } from 'react-router';

const ReadList = () => {
    const {readBooks} = useContext(BookContext)
    return (
        <div>
            {readBooks.length}
            {
                readBooks.map((book, index)=>(
                    <div key={index} className='mb-6 rounded-2xl p-3.5 shadow flex gap-7 border border-gray-100'>
                        <div className='bg-gray-200 rounded-2xl flex justify-center items-center p-8'>
                            <img src={book.image} className='w-[90px] h-[120px]'></img>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='font-bold text-2xl'>{book.bookName}</h1>
                            <p className='text-gray-500 font-medium'><span className='font-bold'>By: </span>{book.author}</p>
                             <div className='flex items-center gap-3'>
                                <p className='font-bold'>Tag</p>
                                {
                                    book.tags.map(el=>(
                                        <div className='badge font-medium badge-success badge-soft'># {el}</div>
                                    ))
                                }
                                <div className='flex gap-1.5 items-center text-gray-500 font-medium'>
                                    <CiLocationOn />
                                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                             </div>
                             <div className='flex items-center gap-3 text-gray-500 font-medium border-b border-gray-300 pb-3 mb-3'>
                                <HiOutlineUsers />
                                <p>Pulisher: {book.publisher}</p>
                                <GrDocumentText />
                                <p>Page: {book.totalPages}</p>
                             </div>
                             <div className='flex items-center gap-2'>
                                <div className='bg-blue-100 text-blue-400 font-medium inline-flex py-1.5 px-4 rounded-3xl'>Category: {book.category}</div>
                                <div className='bg-amber-100 text-amber-400 font-medium inline-flex py-1.5 px-4 rounded-3xl'>Ratng: {book.rating}</div>
                                <Link to={`/bookDetails/${book.bookId}`} className='btn bg-lime-500 font-medium text-white rounded-3xl'>View Details</Link>
                             </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ReadList;