import './App.css'
import React, {useState} from 'react';
import books from './books';
import BookCard from './companents/BookCard';
import Navbar from './companents/Navbar';
import {Router} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const[cart,setCart] = useState([]);
  const addToCart = (book) => {
    setCart([...cart,book]);
  };
  // const [cartItems, setCartItems] = useState([]);
  // const addToCart = (book) => {
  //   setCartItems((prevItems) =>{
  //     const existingItem = prevItems.find((item) => item.id === book.id);
  //     if(existingItem){
  //       return prevItems.map((item) => 
  //       item.id === book.id ? {...item, quantity: item.quantity +1}: item  )
  //     }else{
  //       return[...prevItems, {...book, quantity: 1}];
  //     }

  //   });
  

  return (
    // <div>
    //   {/* <h1 style={{textAlign:'center'}}>книжный магазин</h1>
    //   {/* <Card cartItems={cartItems}/> */}
    //   <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
    //     {books.map((book) =>(
    //       <BookCard key={book.id} book = {book} addToCart={addToCart}/>
    //     ))} */
    //   </div>
      

    // </div>}
    <Router>
      <Navbar cartCount={cart.length}/>
      <Roytes>
        <Route path="/" element={<HomePage books={books} addToCart={addToCart}/>} />
        {/* <Route path="/cart"/> */}
      </Roytes>
    </Router>
  );
};
   
export default App;
