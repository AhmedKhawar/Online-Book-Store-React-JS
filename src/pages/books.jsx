import { Hero } from "../Common Components/heroHeader";
import { ListedItem } from "../Common Components/booksPageCommon";
import "../styles/book.css"
import { booksData } from "../booksData";


export const Books = (props) => {
  const heading = "Our Collection";
  const subheading = "Premium Books for every reader";

  return (
    <>
      <Hero heading={heading} subheading={subheading} />

      <div className="container">
        <div className="row catalog">
           { booksData.map((item) =>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ListedItem cartItems={props.cartItems} setCartItems = {props.setCartItems} id = {item.id} title={item.title} author={item.author} price={item.price} imglink={item.image}/>
          </div>
           )}
        </div>
      </div>
    </>
  );
};
