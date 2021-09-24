// import React from 'react'
// import Navbar from './Navbar'
// import MainHeding from './MainHeding'
// import ProductsParent from './ProductsParent'


// function Horror() {
//     return (
//         <div>
//              <Navbar></Navbar>
//             <MainHeding head='Horror'></MainHeding>
//             <ProductsParent info="Horror"></ProductsParent>
//         </div>
//     )
// }

// export default Horror

// import React from 'react'
// import Navbar from './Navbar'
// import MainHeding from './MainHeding'
// import ProductsParent from './ProductsParent'

// function Biography() {
//     return (
//         <div>
//              <Navbar></Navbar>
//             <MainHeding head='Biography'></MainHeding>
//             <ProductsParent info="Biography"></ProductsParent>
//         </div>
//     )
// }

// export default Biography

import React from 'react'
import Navbar from './Navbar'
import MainHeding from './MainHeding'
import Category from './Category'
import {Link} from 'react-router-dom'

function Horror(props) {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeding head='Horror'></MainHeding>
            
            <div className="m-6 p-5  border-none b-2 container">
            <div className="row row-cols-1 ">

            {Category.map((data, i) =>{
                
                
                if(data.id<=15 && data.id>10){
                
                    return(
                        
                        <React.Fragment key={i}>
                           
                        
                            <div className="col m-6 border b-3">
                                <div className="row row-col-1 row-col-sm-3 m-1">
                                    <div className="col-4 m-1 ">
                                        <img className="img-fluid" src=  {data.image} alt="oops" />
                                    </div>
                                    <div className="col-lg-4 col-md-5 m-1 border-none b-3">
                                        <h2 className="h2">{data.name}</h2>
                                        <h4 className="h4">{data.author}"({data.releaseYear})"</h4>
                                        <p>{data.desc}</p>
                                    </div>
                                    <div className="col-3  m-1 ">
                                        <div className="row row-col-1">
                                            <div className="col">
                                                    <div className="h2">₹{data.price}</div>
                                            </div>
                                            <div className="col">
                                                <div>
                                                    <button className="btn btn-primary m-1 p-3" key={i+10} onClick={() => { 
                                                                return(
                                                                props.add(i+10)
                                                            );}}>+
                                                    </button>
                                                    <h3>{props.count(i+10)}</h3> 
                                                  
                                                    <button  className="btn btn-primary m-1 p-3"  key={i} onClick={() => { 
                                                            return(
                                                            props.sub(i+10)

                                                        );}} >-
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                                <Link to="/Cart">
                                                                     <button className="btn btn-success m-4 padding-right-4 padding-left-4">Cart</button>
                                                                </Link>
                                                    
                                            </div>
                                        </div>
            
                                    </div>
                                </div>
                                
            
                            </div>
                
                            
                        </React.Fragment>
                    )
                }
            
            })}
            </div>
            </div>


        </div>
    )

}
export default Horror



