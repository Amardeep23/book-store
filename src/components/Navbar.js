import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-white h2">
                <div className="container-fluid justify-content-center ">
            
                    <ul className="navbar-nav ">
                        <li className="nav-item"> 
                        <Link to="/" className="m-2" style={{ textDecoration: 'none'}}>Home</Link>  
                        </li>
                        <li className="nav-item">
                        {/* <Link to="/">Features</Link> */}
                        <Link to="/" className="m-2" style={{ textDecoration: 'none'}}>Categories</Link> 
                        </li>
                        <li className="nav-item">
                        <Link to="/Cart" className="m-2" style={{ textDecoration: 'none'}}>Cart</Link>
                        </li>
                    </ul>
               
                 </div>
            </nav>
        </>
    )
}

export default Navbar
