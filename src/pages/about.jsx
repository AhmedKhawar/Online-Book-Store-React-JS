import "../styles/about.css"
import {Hero} from "../Common Components/heroHeader";
import {Card} from "../Common Components/aboutPageCommon";

export const About = () => {
    const stories = [
    {
        title: "Our Story",
        text: "Founded in 2024, PageTurner connects readers with exceptional books. Every story has power to transform and inspire readers worldwide."
    },
    {
        title: "Our Collection",
        text: "Each book is handpicked by literature experts. From classics to bestsellers, we curate only the finest reads for your shelf."
    },
    {
        title: "Our Promise",
        text: "Quality books, fast delivery, excellent service. We make book shopping seamless and enjoyable. Your satisfaction is our priority."
    },
    {
        title: "Join Our Community",
        text: "Join 50,000+ readers who trust PageTurner. Discover favorites, explore genres, and celebrate reading with us today."
    }
];

let heading = "About PageTurner";
let subheading = "Your literary companion since 2024";

    return(
        <>

          <Hero heading={heading} subheading={subheading}/>
         <div className="container">
            <div className="row content">
                {stories.map( (item) => 
                <div className="col-lg-6 col-md-12">
                    <div className="story">
                        <Card title={item.title} text={item.text}/>
                    </div>
                 </div>
                )}                
            </div>
        </div>


        </>
    );
}