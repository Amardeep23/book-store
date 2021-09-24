import React from 'react'
import Books from './Category'


import { Link } from 'react-router-dom'

function HomePageCat() {
    return (
        <>
            {Books.map((data, key)=>{
            
                    return(
                        <React.Fragment key={key}>
                        
                
                                    <Link to={data.Catname} style={{ textDecoration: 'none' , color: 'black'}}>
                                        <div className="col m-6 border b-3">
                                            <h3 >{data.Catname}</h3>
                                            <img className="img-fluid" src=  {data.img} alt="oops" />
                                    
                                        </div>
                                    </Link>
                
                            
                        </React.Fragment>
                    )
                
            })}
        </>
    )
}

export default HomePageCat
