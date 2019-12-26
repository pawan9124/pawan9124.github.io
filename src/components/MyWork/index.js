import React from "react";
import Cards from "../Cards";
import ReactImageMagnify from "react-image-magnify";
import "./style.scss";

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ""
    };
  }
  render() {
    return (
      <section className="thrid_section" id="my_work">
        <div className="bullet"></div>
        <h1>Selected Web projects ...</h1>
        <Cards
          image={"first_project.jpg"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"01"}
          isModal={false}
          link={"https://stickyphoto.com"}
          doc_title={"StickyPhoto to share your journey"}
          details={["React", "Webpack", "Nodejs", "MongoDB", "Express"]}
          style={{
            left: "10%",
            position: "relative",
            height: "max-content",
            width: "max-content"
          }}
        />
        <Cards
          image={"second_project.jpg"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"02"}
          isModal={false}
          doc_title={"My change docs"}
          details="This is about the time we should put some details"
          link={"https://stickyphoto.com"}
          style={{
            left: "64%",
            position: "relative",
            top: "-8rem",
            display: "inline-block",
            height: "max-content",
            width: "max-content"
          }}
        />
        <Cards
          image={"third_project.jpeg"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"03"}
          isModal={false}
          link={"https://stickyphoto.com"}
          style={{
            left: "11%",
            position: "relative",
            top: "-25%",
            height: "max-content",
            width: "max-content"
          }}
        />
      </section>
    );
  }
}

export default MyWork;
