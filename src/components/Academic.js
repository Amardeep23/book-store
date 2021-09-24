import React from 'react'
import Navbar from './Navbar'
import MainHeding from './MainHeding'
import Category from './Category'

function AcademicPage(props) {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeding head='Academic'></MainHeding>
            
            <div className="m-6 p-5  border-none b-2 container">
            <div className="row row-cols-1 ">

            {Category.map((data, i) =>{
                
                
                if(data.id<=5){
                
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
                                                    <button className="btn btn-primary m-1 p-3" key={i} onClick={() => { 
                                                                return(
                                                                props.add(i)
                                                            );}}>+
                                                    </button>
                                                    <h3>{props.count(i)}</h3> 
                                                  
                                                    <button  className="btn btn-primary m-1 p-3"  key={i} onClick={() => { 
                                                            return(
                                                            props.sub(i)

                                                        );}} >-
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                    <button className="btn btn-success m-4 padding-right-4 padding-left-4">Add To Cart</button>
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
export default AcademicPage


