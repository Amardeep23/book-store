import './App.css';
// import Navbar from './components/Navbar';
// import BookImage from './components/BookImage';
// import Categories from './components/Categories';
// import HomePageCat from './components/HomePageCat';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import index from './components/index'
import PageNotFound from './components/PageNotFound';
import Academic from './components/Academic';
import Biography from './components/Biography';
// import Horror from './components/Horror';
// import Inspirational from './components/Inspirational';
import Language from './components/Language';
import Cart from './components/Cart';
import React, {useState} from 'react';
import Category from './components/Category'


function App() {

  // const [state, setState] = useState(Category)

  // {Books.map((Book) => {

    

  //   const increment = (id) => {
  //   setState([...state, state)
  //   }

  // })}
  const [state,setState] = useState(Category);
  const [total,setTotal] = useState(0);

  function handleClick (i){
    let temp_state = [...state];

// 2. Make a shallow copy of the element you want to mutate
let temp_element = { ...temp_state[i] };

// 3. Update the property you're interested in
if(temp_element.count>0){
temp_element.count = temp_element.count-1;
temp_element.pay = temp_element.pay - temp_element.price;}

// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
temp_state[i] = temp_element;
setTotal(total-temp_element.price);

// 5. Set the state to our new copy
setState( temp_state );
}

function handleClicksum (i){
    let temp_state = [...state];

// 2. Make a shallow copy of the element you want to mutate
let temp_element = { ...temp_state[i] };

// 3. Update the property you're interested in
temp_element.count = temp_element.count+1;
temp_element.pay = temp_element.pay + temp_element.price;

// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
temp_state[i] = temp_element;
setTotal(total+temp_element.price)
// 5. Set the state to our new copy
setState( temp_state );
}

function count(i){
  let temp_state = [...state];
  let temp_element = { ...temp_state[i] };
  return(
<div>{temp_element.count}</div>
  );
}

function pay(i){
  let temp_state = [...state];
  let temp_element = { ...temp_state[i] };
  return(
<div>{temp_element.pay}</div>
  );
}

function count1(i){
  let temp_state = [...state];
  let temp_element = { ...temp_state[i] };
  return(
temp_element.count
  );
}

function total1(){
  return(
    <div>{total}</div>
  );
}


  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={index}></Route>
          <Route exact path='/Academic' component={Academic}>
            <Academic  add = {handleClicksum} sub ={handleClick} count ={count}></Academic>
          </Route>
          <Route exact path='/404' component={PageNotFound}></Route>
          <Route exact path="/Biography" component={Biography}>
            <Biography add = {handleClicksum} sub ={handleClick} count ={count}></Biography>
          </Route>
          <Route exact path="/Horror" component={Horror}>
            <Horror add = {handleClicksum} sub ={handleClick} count ={count}> </Horror>
          </Route>
          {/* <Route exact path="/Inspirational" component={Inspirational}>
            <Inspirational add= {handleClicksum} sub ={handleClick} count ={count}></Inspirational>
          </Route>
          <Route exact path="/Language" component={Language}>
            <Language add = {handleClicksum} sub ={handleClick} count ={count}></Language>
          </Route> */}
          <Route exact path="/Cart" component={Cart}>
            <Cart count1 ={count1} count = {count} pay = {pay} total={total1}></Cart>
          </Route>
          <Redirect to="/404/"></Redirect>
        </Switch>
      </Router>

      {/* <Navbar></Navbar>
      <BookImage></BookImage>
      <Categories></Categories>
      <br /><br />
      <HomePageCat></HomePageCat> */}
    </div>
  );
}

export default App;
