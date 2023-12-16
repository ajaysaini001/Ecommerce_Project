import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { increment,decrement } from './redux/slices/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
const App = () => {
  const count= useSelector((state)=>state.cart.value);
  const dispetch=useDispatch();
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App