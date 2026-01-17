import "../styles/home.css";
import { Homebook } from "../Common Components/homePageCommon";
import { booksData } from "../booksData";

export const Home = () => {
  const heading = "Discover Your Next Adventure";
  const subheading = "Curated books for modern readers";


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="heroN">
              <h2>{heading}</h2>
              <p>{subheading}</p>

              <div className="categories">
           
                <button className="bt fiction">Fiction</button>
                <button className="bt fantasy">Fantasy</button>
                <button className="bt mystery">Mystery</button>
                <button className="bt scifi">Scifi</button>
                <button className="bt children">Children</button>
              
           
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 section">
            <h3>Featured Books</h3>
          </div>
        </div>

        <div className="row books">
            {booksData.slice(0,5).map((item) =>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Homebook id={item.id} img = {item.image} title={item.title} price = {item.price}/>
          </div>
          )}
        </div>
      </div>
    </>
  );
};
