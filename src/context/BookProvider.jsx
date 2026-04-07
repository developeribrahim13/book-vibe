import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [readBooks, setReadBooks] = useState([])
    const [wishList, setWishList] = useState([])
const handleReadBooks = (books) => {
    const isExistInReadBooks = readBooks.find(book=>book.id==books.id)
    const isExistInWishList = wishList.find(book=>book.id==books.id)
    if(isExistInReadBooks)
    {
        toast.error(`${books.bookName} is already exist in the read list`)
        return;
    }
    else if(isExistInWishList)
    {
        toast.error(`${books.bookName} is already exist in the wish list`)
        return;
    }
    setReadBooks([...readBooks,books])
    toast.success(`${books.bookName} is succesfully add in the read list`)
}

const handleWishList = (books) => {
    const isExistInReadBooks = readBooks.find(book=>book.id==books.id)
    const isExistInWishList = wishList.find(book=>book.id==books.id)
    if(isExistInReadBooks)
    {
        toast.error(`${books.bookName} is already exist in the read list`)
        return;
    }
    else if(isExistInWishList)
    {
        toast.error(`${books.bookName} is already exist in the wish list`)
        return;
    }
    setWishList([...wishList,books])
    toast.success(`${books.bookName} is succesfully add in the wish list`)
}

const data = {
    readBooks,
    setReadBooks,
    handleReadBooks,
    wishList,
    setWishList,
    handleWishList,
}
    return (
        <BookContext.Provider value={data}>{children}</BookContext.Provider>
    );
};

export default BookProvider;