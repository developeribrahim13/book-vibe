import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { CiStar } from "react-icons/ci";
import { BookContext } from '../../../context/BookProvider';

const BookDetails = () => {
    const {handleReadBooks, handleWishList} = useContext(BookContext)
    const {id} =  useParams()
    const books = useLoaderData()
    const expectedBooks = books.find(book => book.bookId == id)
    if (!expectedBooks) {
        return <h2 className='text-center my-48 text-6xl text-red-500 font-bold'>Book Details not found!</h2>;
    }
    return (
        <div className='max-w-[80%] mx-auto shadow rounded-3xl overflow-hidden grid grid-cols-2'>
            <div className='flex justify-center items-center p-12 bg-gray-100'>
                <img src={expectedBooks.image} className='w-[350px] h-[500px]'></img>
            </div>
            <div className='p-3.5 space-y-5'>
                <h1 className='font-bold text-2xl'>{expectedBooks.bookName}</h1>
                <p className='text-gray-500'>{expectedBooks.author}</p>
                <p className='border-t border-b text-gray-400 py-1.5 border-amber-300'>{expectedBooks.category}</p>
                <p className='font-medium text-gray-400'><span className='font-bold text-black'>Review:</span>{expectedBooks.review}</p>
                <div className='flex items-center gap-3'>
                    <h4 className='font-bold'>Tag</h4>
                     <div className='flex items-center gap-3'>
                        {
                            expectedBooks.tags.map(el=>(
                                <div className='badge badge-success badge-soft'>#{el}</div>
                            ))
                        }
                    </div>
                </div>
                    <div className='border-t border-gray-300 pt-2.5'>
                        <div className='flex items-center gap-10'>
                            <p className='text-gray-400 font-semibold'>Number of pages:</p>
                            <p className='font-semibold'>{expectedBooks.totalPages}</p>
                        </div>
                        <div className='flex items-center gap-24'>
                            <p className='text-gray-400 font-semibold'>Publisher:</p>
                            <p className='font-semibold'>{expectedBooks.publisher}</p>
                        </div>
                        <div className='flex items-center gap-9'>
                            <p className='text-gray-400 font-semibold'>Year of Publishing:</p>
                            <p className='font-semibold'>{expectedBooks.yearOfPublishing}</p>
                        </div>
                        <div className='flex items-center gap-30'>
                            <p className='text-gray-400 font-semibold'>Rating:</p>
                            <p className='flex items-center gap-1 font-semibold'>{expectedBooks.rating}<CiStar /></p>
                        </div>
                    </div>

                <div className='flex gap-3'>
                    <Link className='btn bg-transparent border border-black rounded-xl' onClick={()=>handleReadBooks(expectedBooks)}>Read</Link>
                    <Link className='btn bg-cyan-500 text-white rounded-xl' onClick={()=>handleWishList(expectedBooks)}>Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;