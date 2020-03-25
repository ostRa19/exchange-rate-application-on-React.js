import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Rate from "./Rate/Rate.js";
import About from "./About/About.js";
import Error from "./Error/Error.js";
import Cookie from "./Cookie/Cookie.js";
import Contact from "./Contact/Contact.js";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let nav = { Main: "/", About: "/about" };
    return (
      <div className="App">
        <Header nav={nav} />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </Router>
          </main>
        </div>

        <Cookie />

        <Footer />
      </div>
    );
  }
}

export default App;
