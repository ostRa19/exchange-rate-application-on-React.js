import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Link on{" "}
        <a
          href="https://github.com/Sereggan"
          target="_blank"
          rel="noopener noreferrer"
        >
          My githab
        </a>
      </div>
    );
  }
}

export default Contact;
