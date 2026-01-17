import { Link, useNavigate } from "react-router-dom";
import "../Common Components Styles/booksPageCommon.css";
import { useState } from "react";

export const ListedItem = (props) => {
  const Navigate = useNavigate();
  const addtoCart = () =>
  {
    const newBook = {
      id: props.id,
      image: props.imglink,
      title: props.title,
      author: props.author,
      price: props.price
    };

    const exists = props.cartItems.some((item) => item.id === props.id);
    if(!exists)
    {
      props.setCartItems(prev=>[...prev, newBook]);
    }
    else
    {
      window.alert("The selected book already exists");
    }
    Navigate("/cart");
  }

  return (
    <div className="item">
      <Link to={`/detail/${props.id}`}>
        <img src={props.imglink} alt={props.title} />
      </Link>
      <div className="details">
          <Link to={`/detail/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <p>{props.author}</p>
        <span>${props.price}</span>
        <button onClick={addtoCart} id="btn">Add to Cart</button>
      </div>
    </div>
  );
};
