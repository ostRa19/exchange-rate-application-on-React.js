import React from "react";
import "./Error.css";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Error</h1>
        <p> Такой страницы не существует</p>
      </div>
    );
  }
}

export default Error;
