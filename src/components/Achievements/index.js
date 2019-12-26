import React from "react";
import Cards from "../Cards";
import "./style.scss";

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ""
    };
  }
  render() {
    return (
      <section className="fourth_section" id="achievements">
        <h1>List of Achievements ...</h1>
        <Cards
          image={"first_project.jpg"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"01"}
          isModal={true}
          style={{
            left: "64%",
            position: "relative",
            height: "max-content",
            display: "inline-block",
            width: "max-content"
          }}
        />
        <Cards
          image={"second_project.jpg"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"02"}
          isModal={true}
          style={{
            left: "10%",
            position: "relative",
            top: "-8rem",
            width: "max-content",
            height: "max-content"
          }}
        />
        <Cards
          image={"third_project.jpeg"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"03"}
          isModal={true}
          style={{
            left: "64%",
            position: "relative",
            top: "-25%",
            height: "max-content",
            display: "inline-block",
            width: "max-content"
          }}
        />
      </section>
    );
  }
}

export default Achievements;
