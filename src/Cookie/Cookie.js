import React from "react";
import "./Cookie.css";

class Cookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  Agreed = () => {
    this.setState({
      show: false
    });
  };
  render() {
    return (
      <div>
        {this.state.show && (
          <div className="container" id="cookie_info">
            На нашем сайте мы используем cookie для сбора информации
            технического характера.
            <br />В частности, для персонифицированной работы сайта мы
            обрабатываем IP-адрес региона вашего местоположения.&nbsp;
            <input
              id="cookie_button"
              type="button"
              defaultValue="Ok"
              onClick={this.Agreed}
            />
          </div>
        )}{" "}
      </div>
    );
  }
}

export default Cookie;
