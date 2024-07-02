import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ConverterPage from "./pages/ConverterPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/converter" component={ConverterPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
