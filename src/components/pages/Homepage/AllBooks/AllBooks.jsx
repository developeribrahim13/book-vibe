import React, { use } from 'react';
import BookCards from './BookCards/BookCards';

const AllBooks = ({dataPaichi}) => {
    const books = use(dataPaichi)
    return (
        <>
        <h1 className='font-extrabold text-center text-4xl mt-10'>Books</h1>
        <BookCards books={books}/>
        </>
    );
};

export default AllBooks;