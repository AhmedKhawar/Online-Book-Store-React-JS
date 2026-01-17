import "../Common Components Styles/detailPageCommon.css";
import { useNavigate } from "react-router-dom";

export const Info = (props) => {
  const Navigate = useNavigate();
  const addtoCart = () =>
  {
    const newBook = {
      id: props.id,
      image: props.image,
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
    <>
      <div className="col-lg-5 col-md-6">
        <div className="book-image">
          <img src={props.image} alt={props.title} />
        </div>
      </div>

      <div className="col-lg-7 col-md-6">
        <div className="book-info">
          <h2>{props.title}</h2>
          <p className="author">{props.author}</p>
          <p className="price">${props.price}</p>

          <div className="description">
            <h3>{props.aboutHeading}</h3>
            <p>{props.description1}</p>
            <p>{props.description2}</p>
          </div>

          <div className="details-info">
            <p><strong>Genre:</strong> {props.genre}</p>
            <p><strong>Pages:</strong> {props.pages}</p>
            <p><strong>Published:</strong> {props.published}</p>
            <p><strong>ISBN:</strong> {props.isbn}</p>
          </div>

          <div className="actions">
              <button onClick={addtoCart} id="add-cart">Add to Cart</button>
              <button id="buy-now">Buy Now</button>
  
          </div>
        </div>
      </div>
    </>
  );
};
