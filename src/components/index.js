import React from 'react'
import Navbar from './Navbar'
import BookImage from './BookImage'
// import Categories from './Categories'
import HomePageCat from './HomePageCat'


function index() {
    return (
        <div>
            <Navbar></Navbar>
            <BookImage></BookImage>
            {/* <Categories></Categories> */}
            <div  className=" m-6 p-5  border b-2 container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                     <HomePageCat></HomePageCat>
                </div>    
            </div>
        </div>
    )
}

export default index
