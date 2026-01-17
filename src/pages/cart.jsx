import { CartLayout } from "../Common Components/cartPageCommon";
import { Bill } from "../Common Components/cartPageCommon";
import "../styles/cart.css";
import { useState } from "react";
import { useEffect } from "react";
import { Error } from "../Common Components/cartPageCommon";

export const Cart = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const[shipping, setShipping] = useState(0);
  
  useEffect(() => {
    const new_subTotal = props.cartItems.reduce((subtot, item) => subtot + Number(item.price), 0 )
    setSubtotal(new_subTotal);
    if(new_subTotal == 0)
    {
      setShipping(0);
      setTotal(0);
    }
    else
    {
      setShipping(5);
      setTotal(new_subTotal + 5);
    }
    
  }, [props.cartItems]);
  return (
    <div className="container cart-wrapper">
      <div className="row">
        <h2>Your Cart</h2>

        <div className="col-lg-8">
          {props.cartItems.length == 0 ? <Error /> :
            props.cartItems.map((item) =>
            <CartLayout
              id = {item.id}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              img={item.image}
              title={item.title}
              author={item.author}
              price={item.price}
            />
          )}
        </div>

        <div className="col-lg-4">
          <Bill
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </div>

      </div>
    </div>
  );
};
