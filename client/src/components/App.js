import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./App.scss";

import Header from "./Header";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <AlertProvider template={AlertTemplate}>
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
                  {/* <Route path="/me" component={me} /> */}
                  <Redirect to="/" />
                </Switch>
              </div>
            </div>

            <Sidebar />
          </div>

          <Footer />
        </Router>
      </div>
    </AlertProvider>
  );
};

const Footer = () => {
  return <div className="footer">footer</div>;
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
