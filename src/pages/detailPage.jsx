import { Info } from "../Common Components/detailPageCommon";
import "../styles/detailPage.css";
import { booksData } from "../booksData";
import { useParams } from "react-router-dom";

export const Detail = (props) => {
  const { id } = useParams(); 

  const book = booksData.find(item => item.id === Number(id));

  return (
    <div className="container">
      <div className="row detail-container">
        <Info 
        id={book.id}
        cartItems={props.cartItems}
        setCartItems = {props.setCartItems}
        image={book.image} 
        author = {book.author} 
        price = {book.price}
        title = {book.title}
        aboutHeading = {book.aboutHeading} 
        description1 = {book.description1}
        description2 = {book.description2} 
        genre = {book.genre} 
        pages = {book.pages} 
        published = {book.published} 
        isbn = {book.isbn}/>
      </div>
    </div>
  );
};
