import "../Common Components Styles/heroHeader.css";


export const Hero = (props) =>
{
    return(
           <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="hero">
                            <h2>{props.heading}</h2>
                            <p>{props.subheading}</p>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}