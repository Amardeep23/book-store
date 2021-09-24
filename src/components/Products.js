// import React from 'react'
// import Category from './Category'
// import {useState} from 'react'

// function Products(props) {

//     // constructor(props) {
//     //     super(props)
    
//     //     this.state = {
//     //          count:0
//     //     }
//     //     // this.increment = this.increment.bind(this)
//     //     // this.decrement = this.decrement.bind(this)
//     // }
//     // const [count, setCount] = useState(Books)


//     // const increment = (id) => {
//     //     // this.setState( prevState => {
//     //     //     return{count: prevState.count + 1}
//     //     // })
//     //     setCount([...count, count.map(dataT=>{
//     //         return (
//     //             dataT.count[id-1] = dataT.count[id-1]+1
//     //         ) 
//     //     })])
        
//     // }
//     // const decrement = (id) => {
//     //     // this.setState( prevState => {
//     //     //     if(prevState.count<=0){
//     //     //         return prevState.count + 1
//     //     //     }else{
//     //     //         return{count: prevState.count - 1}
//     //     //     }
            
//     //     // })
//     //     setCount(setCount([...count, count.map(dataT=>{
//     //         return (
//     //             dataT.count[id-1] = dataT.count[id-1]-1
//     //         ) 
//     //     })]))
    
//     // }


    

    
//         return (
//             <>
//             {Category.map((data, key) =>{
                
                
//                     if(props.info == "Academic" && data.id<=5){
                    
//                         return(
                            
//                             <React.Fragment key={key}>
                               
                            
//                                 <div className="col m-6 border b-3">
//                                     <div className="row row-col-1 row-col-sm-3 m-1">
//                                         <div className="col-4 m-1 ">
//                                             <img className="img-fluid" src=  {data.image} alt="oops" />
//                                         </div>
//                                         <div className="col-lg-4 col-md-5 m-1 border-none b-3">
//                                             <h2 className="h2">{data.name}</h2>
//                                             <h4 className="h4">{data.author}"({data.releaseYear})"</h4>
//                                             <p>{data.desc}</p>
//                                         </div>
//                                         <div className="col-3  m-1 ">
//                                             <div className="row row-col-1">
//                                                 <div className="col">
//                                                         <div className="h2">₹{data.price}</div>
//                                                 </div>
//                                                 <div className="col">
//                                                     <div>
//                                                         <button className="btn btn-primary m-1 p-3">+</button>
//                                                         {/* <h3>{count}</h3> */}
//                                                         {/* {count.map(cnt => {
//                                                             return(
//                                                                 <div>
//                                                                     <h3>{data.count}</h3>
//                                                                 </div>
//                                                             )
//                                                         })} */}
//                                                         <button  className="btn btn-primary m-1 p-3">-</button>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col">
//                                                         <button className="btn btn-success m-4 padding-right-4 padding-left-4">Add To Cart</button>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
                                    

//                                 </div>
                    
                                
//                             </React.Fragment>
//                         )
//                     }

//                     // if(props.info == "Biography" && data.id<=10 && data.id>5){
                    
//                     //     return(
                            
//                     //         <React.Fragment key={key}>
                               
                            
//                     //             <div className="col m-6 border b-3">
//                     //                 <div className="row row-col-1 row-col-sm-3 m-1">
//                     //                     <div className="col-4 m-1 ">
//                     //                         <img className="img-fluid" src=  {data.image} alt="oops" />
//                     //                     </div>
//                     //                     <div className="col-lg-4 col-md-5 m-1 border-none b-3">
//                     //                         <h2 className="h2">{data.name}</h2>
//                     //                         <h4 className="h4">{data.author}"({data.releaseYear})"</h4>
//                     //                         <p>{data.desc}</p>
//                     //                     </div>
//                     //                     <div className="col-3  m-1 ">
//                     //                         <div className="row row-col-1">
//                     //                             <div className="col">
//                     //                                     <div className="h2">₹{data.price}</div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                 <div>
//                     //                                      <button onClick={increment} className="btn btn-primary m-1 p-3">+</button>
//                     //                                     <h3>{count}</h3>
//                     //                                     <button onClick={decrement} className="btn btn-primary m-1 p-3">-</button>
//                     //                                 </div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                     <button className="btn btn-success m-4 padding-right-4 padding-left-4">Add To Cart</button>
//                     //                             </div>
//                     //                         </div>

//                     //                     </div>
//                     //                 </div>
                                    

//                     //             </div>
                    
                                
//                     //         </React.Fragment>
//                     //     )
//                     // }
//                     // if(props.info == "Horror" && data.id<=15 && data.id>10){
                    
//                     //     return(
                            
//                     //         <React.Fragment key={key}>
                               
                            
//                     //             <div className="col m-6 border b-3">
//                     //                 <div className="row row-col-1 row-col-sm-3 m-1">
//                     //                     <div className="col-4 m-1 ">
//                     //                         <img className="img-fluid" src=  {data.image} alt="oops" />
//                     //                     </div>
//                     //                     <div className="col-lg-4 col-md-5 m-1 border-none b-3">
//                     //                         <h2 className="h2">{data.name}</h2>
//                     //                         <h4 className="h4">{data.author}"({data.releaseYear})"</h4>
//                     //                         <p>{data.desc}</p>
//                     //                     </div>
//                     //                     <div className="col-3  m-1 ">
//                     //                         <div className="row row-col-1">
//                     //                             <div className="col">
//                     //                                     <div className="h2">₹{data.price}</div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                 <div>
//                     //                                     <button onClick={increment} className="btn btn-primary m-1 p-3">+</button>
//                     //                                     <h3>{count}</h3>
//                     //                                     <button onClick={decrement} className="btn btn-primary m-1 p-3">-</button>
//                     //                                 </div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                     <button className="btn btn-success m-4 padding-right-4 padding-left-4">Add To Cart</button>
//                     //                             </div>
//                     //                         </div>

//                     //                     </div>
//                     //                 </div>
                                    

//                     //             </div>
                    
                                
//                     //         </React.Fragment>
//                     //     )
//                     // }
                    
//                     // if(props.info == "Inspirational" && data.id<=20 && data.id>15){
                    
//                     //     return(
                            
//                     //         <React.Fragment key={key}>
                               
                            
//                     //             <div className="col m-6 border b-3">
//                     //                 <div className="row row-col-1 row-col-sm-3 m-1">
//                     //                     <div className="col-4 m-1 ">
//                     //                         <img className="img-fluid" src=  {data.image} alt="oops" />
//                     //                     </div>
//                     //                     <div className="col-lg-4 col-md-5 m-1 border-none b-3">
//                     //                         <h2 className="h2">{data.name}</h2>
//                     //                         <h4 className="h4">{data.author}"({data.releaseYear})"</h4>
//                     //                         <p>{data.desc}</p>
//                     //                     </div>
//                     //                     <div className="col-3  m-1 ">
//                     //                         <div className="row row-col-1">
//                     //                             <div className="col">
//                     //                                     <div className="h2">₹{data.price}</div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                 <div>
//                     //                                      <button onClick={increment} className="btn btn-primary m-1 p-3">+</button>
//                     //                                         <h3>{count}</h3>
//                     //                                     <button onClick={decrement} className="btn btn-primary m-1 p-3">-</button>
//                     //                                 </div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                     <button className="btn btn-success m-4 padding-right-4 padding-left-4">Add To Cart</button>
//                     //                             </div>
//                     //                         </div>

//                     //                     </div>
//                     //                 </div>
                                    

//                     //             </div>
                    
                                
//                     //         </React.Fragment>
//                     //     )
//                     // }
//                     // if(props.info == "Language" && data.id<=25 && data.id>20){
                    
//                     //     return(
                            
//                     //         <React.Fragment key={key}>
                               
                            
//                     //             <div className="col m-6 border b-3">
//                     //                 <div className="row row-col-1 row-col-sm-3 m-1">
//                     //                     <div className="col-4 m-1 ">
//                     //                         <img className="img-fluid" src=  {data.image} alt="oops" />
//                     //                     </div>
//                     //                     <div className="col-lg-4 col-md-5 m-1 border-none b-3">
//                     //                         <h2 className="h2">{data.name}</h2>
//                     //                         <h4 className="h4">{data.author}"({data.releaseYear})"</h4>
//                     //                         <p>{data.desc}</p>
//                     //                     </div>
//                     //                     <div className="col-3  m-1 ">
//                     //                         <div className="row row-col-1">
//                     //                             <div className="col">
//                     //                                     <div className="h2">₹{data.price}</div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                 <div>
//                     //                                     <button onClick={increment} className="btn btn-primary m-1 p-3">+</button>
//                     //                                     <h3>{count}</h3>
//                     //                                     <button onClick={decrement} className="btn btn-primary m-1 p-3">-</button>
//                     //                                 </div>
//                     //                             </div>
//                     //                             <div className="col">
//                     //                                     <button className="btn btn-success m-4 padding-right-4 padding-left-4">Add To Cart</button>
//                     //                             </div>
//                     //                         </div>

//                     //                     </div>
//                     //                 </div>
                                    

//                     //             </div>
                    
                                
//                     //         </React.Fragment>
//                     //     )
//                     // }

            
              
//             })}   
//         </>

//         )
    
// }

// export default Products

