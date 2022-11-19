// TODO: create a component that displays a single bakery item
import { useState, React } from "react";
import "./item.css";

const BakeryItem = ({ name, description, price, image, cart,setCart, total, setTotal}) => {
    function setDict(cart, setCart, name) {
        if (typeof total === 'string' || total instanceof String){
            // console.log('bruh')
            setTotal(price)
        }else{
        setTotal(total+price)
        }
        if (name in cart){
            setCart({...cart, [name]:cart[name]+1})
        }else{
            // console.log('pls')
            setCart({...cart, [name]:1})
        }
    }
    function removeDict(cart, setCart, name) {
        
        setTotal(total-price)
        console.log('test');
        setCart({...cart, [name]:cart[name]-1})
        console.log('test');
        console.log(cart);
        if(cart[name] <= 1){
            console.log('pls')
            const copyCartValues= {...cart}
            delete copyCartValues[name]
            setCart(copyCartValues)
            console.log(copyCartValues)
        }
    }
    let button;
    if (name in cart) {
        button = <button onClick={()=>removeDict(cart,setCart,name)}>Remove from Cart</button>;
      } else {
        button = <button type="button" disabled>Remove from Cart</button>;
      }
    return(
    
    <div id="lk">
        <img src={image}></img>
        <h3>{name}: ${price.toFixed(2)}</h3>
        <p>{description}</p>
        
        
        <button onClick={()=>setDict(cart,setCart,name)}>Add to Cart</button>
        {button}
        </div>
    )
}
export default BakeryItem;
