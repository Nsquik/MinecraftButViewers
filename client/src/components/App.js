import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./Header";
import Navbar from "./Navbar";
import Landing from "./Landing";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="main-wrapper">
          <div className="main">
            <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/summon" component={summon} />
                <Route path="/sound" component={sound} />
                <Route path="/effect" component={effect} />
                <Route path="/misc" component={misc} />
              </Switch>
            </div>
          </div>

          <Sidebar />
        </div>

        <Footer />
      </Router>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">footer</div>;
};

const Sidebar = () => {
  return <div className="sidebar">sidebar</div>;
};

const summon = () => {
  return "SUMMON";
};

const sound = () => {
  return "sound";
};

const effect = () => {
  return "effect";
};

const misc = () => {
  return "SUMMON";
};

export default App;
