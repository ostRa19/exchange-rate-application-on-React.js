import React from "react";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <p> Здесь какой-то текст о нашей компании, сайте, проекте и ТД</p>
      </div>
    );
  }
}

export default About;
