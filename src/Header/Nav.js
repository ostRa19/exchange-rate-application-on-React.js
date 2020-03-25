import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let nav = this.props.nav;
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              {Object.entries(nav).map(([key, value]) => (
                <li key={key}>
                  <a href={value}>{key}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
