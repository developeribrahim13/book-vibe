import React from 'react';
import Banner from './Banner/Banner';
import AllBooks from './AllBooks/AllBooks';
const fetchData = async () => {
    const rspns = await fetch('/public/booksData.json')
    return rspns.json();
}
const dataPaichi = fetchData();
const Homepage = () => {
    return (
        <>
       <Banner/>
       <AllBooks dataPaichi={dataPaichi}/>
        </>
    );
};

export default Homepage;