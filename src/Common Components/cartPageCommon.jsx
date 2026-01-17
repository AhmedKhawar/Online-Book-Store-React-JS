import { useNavigate } from "react-router-dom";
import "../Common Components Styles/cartPageCommon.css"



export const CartLayout = (props) => {
  const Navigate = useNavigate();
  const remove = (id) =>{
    props.setCartItems(props.cartItems.filter((item) => item.id !== id));
    Navigate("/cart")
  }
  return (

      <div className="cart-item">
        <img src={props.img} alt={props.title} />
        <div className="item-details">
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <span className="price">${props.price}</span>
        <button onClick={() => remove(props.id)} className="remove-btn">Remove</button>
      </div>
  );
};

export const Bill = (props) => {
  return (
      <div className="summary">
        <h3>Order Summary</h3>
        <p>
          Subtotal: <span>${props.subtotal.toFixed(2)}</span>
        </p>
        <p>
          Shipping: <span>${props.shipping}</span>
        </p>
        <p className="total">
          Total: <span>${props.total.toFixed(2)}</span>
        </p>
          <button className="checkout-btn" >Proceed to Checkout</button>
      </div>
  );
};



export const Error = () => {
  return(
    <>
    <p>Cart is currently empty</p>
    </>
  );
}