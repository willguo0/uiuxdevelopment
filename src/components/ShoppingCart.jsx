import { useState, React } from "react";
import "./cart.css";

const ShoppingCart = ({ cart, total}) => {
    let cartEle;
    if (Object.keys(cart).length === 0) {
        cartEle = <body id="cart">Cart is currently empty</body>;
      } else {
        cartEle = Object.keys(cart).map((item, index) => (
            <div> 
            <body id="cart">{item}: {cart[item]}x</body>
            <br></br>
            </div>
          ));
      }
    return(
    
        <div id="cart">
        <h2>Cart</h2>
        {cartEle}
        <h2>Total</h2>
        ${Math.round(total * 100) / 100}
      </div>
    )
}
export default ShoppingCart;
