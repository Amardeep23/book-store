import React from 'react'
import Navbar from './Navbar'
import MainHeding from './MainHeding'
import data from './Category'

function Cart(props) {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeding head="Cart"></MainHeding>

            <div div class = "pad1" >
           <div class="head"> CART (SHOPPED ITEMS) </div>
            <div class="flex-container12 center">
            <div class = "grids">
            {
            
            data.filter(data=>data.id).map((pro,i)=> {
               if(props.count1(i) !==0)
                return(
                    <div >
                <div className = "card">
                <div className = "cardbody">
                    <img src = {pro.image} alt="hello" className="img" />
                    <p className="assure">BOOKS</p> 
                   
                    <p className = "title">{pro.name}</p> 
                    <p className="description"> {pro.desc}</p>
                    <p className="price1"> You pay: ₹ { props.pay(i)}</p>
                    <p className="order">Cart:{props.count(i)}</p>
                </div>
               

                
            </div>
            
            </div>
                );
                
                    })}
                    </div>
                    <p className="no">The total cost to pay: {props.total()}</p>
                    </div>
        </div >

        </div>
    )
}

export default Cart





    