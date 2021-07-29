import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Shop from './pages/Shop';

import { useState } from 'react';

function App() {
const [state, setState ] = useState(0);
return (
  <div className="App"> 

  <nav> 
  <Link to="/home">Home</Link> 
    <Link to="/about">About</Link> 
  <Link to="/contact">Contact</Link> 

<Link to="/product">Product</Link>
<Link to="/shop">Shop</Link>
      </nav>

  <h1> Luck9ja.com </h1>
<button onClick={ () => setState(state + 1)}>my items</button>
{state}
  <Switch>

  <Route path="/about">

<About/>
  </Route>

{/* my contact page  */}

  <Route path="/contact">

<Contact/>
  </Route>

{/* my shop page */}
  <Route path="/shop">

  <Shop/>
  </Route>


{/* 
my product page */}
  <Route path="/product">

<Product/>
</Route>



  <Route path="/">

{/* my home page */}
<Home/>
  </Route>
  </Switch>

  </div>
);

}
export default App;
