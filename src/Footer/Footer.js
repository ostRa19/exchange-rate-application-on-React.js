import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let rightList = { Contacts: "/contact", Гарантии: "/", "О сервисе": "/" };
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">
                  <a href="/">2019 &copy; React. Sergey Nikolaychuk</a>
                </h1>
                <p> All Rights Reserved</p>
              </div>

              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    {Object.entries(rightList).map(([key, value]) => (
                      <li key={key}>
                        <a href={value}>{key}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
