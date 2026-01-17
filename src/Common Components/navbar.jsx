import "../Common Components Styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <header>
            <h1>PageTurner</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/books">Books</Link>
              <Link to="/login">Login</Link>
              <Link to="/cart">My Cart ({props.cartCount})</Link>
              <Link to="/prayer">Prayer Timings</Link>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};
