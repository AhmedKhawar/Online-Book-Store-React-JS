import "../Common Components Styles/aboutPageCommon.css";
export const Card = (props) => {
    return(
        <>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </>
    );
}