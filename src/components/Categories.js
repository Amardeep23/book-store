import React from 'react'
import Academic from './image/academic_books.jpg'
import Biographies from './image/biography.jpg'
import Horror from './image/horror.jpg'
import Inspirational from './image/inspirational_books.jpg'
import Language from './image/language_books.jpg'


function Categories() {
    return (
        <>
            <div className=" m-6 p-5  border b-2 container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                    <div className="col m-6 border b-3">
                        <h3>Academic Books</h3>
                        <img className="img-fluid" src={Academic} alt="oops" />
                    </div>
                    <div className="col m-6 border b-3">
                        <h3>Biographies</h3>
                        <img className="img-fluid" src={Biographies} alt="oops" />
                    </div>
                    <div className="col m-6 border b-3">
                        <h3>Horror Books</h3>
                        <img className="img-fluid" src={Horror} alt="oops" />
                    </div>
                    <div className="col m-6 border b-3">
                        <h3>Inspirational Books</h3>
                        <img className="img-fluid" src={Inspirational} alt="oops" />
                    </div>
                    <div className="col m-6 border b-3">
                        <h3>Language Books</h3>
                        <img className="img-fluid" src={Language} alt="oops" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
