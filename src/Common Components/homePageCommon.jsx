import "../Common Components Styles/homePageCommon.css"
import { Link } from "react-router-dom";

export const Homebook = (props) =>{
    return(
        <>
         <div className="book">
              <Link to={`/detail/${props.id}`} >
                <img
                  src={props.img}
                  alt={props.title}
                />
                <p>{props.title}</p>
              </Link>
              <span>${props.price}</span>
        </div>
        </>
    );
}