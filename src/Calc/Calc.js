import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
    this.calcRate = this.calcRate.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = event => {
    event.preventDefault();

    let countCurrency = event.target.elements["count-currency"].value;
    let typeCurrency = event.target.elements["type-currency"].value;
    this.setState({
      result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)
    });
  };

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>
            {" "}
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="100" name="count-currency" />
              <select name="type-currency" id="">
                {Object.keys(this.state.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue=" calc" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
