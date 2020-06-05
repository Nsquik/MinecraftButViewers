import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./App.scss";

import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Me from "./Me";
import Mobs from "./RouteComp/Mobs";
import Effects from "./RouteComp/Effects";
import Sounds from "./RouteComp/Sounds";

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
                  <Route exact path="/" component={Mobs} />
                  <Route path="/sound" component={Sounds} />
                  <Route path="/effect" component={Effects} />
                  {/* <Route path="/misc" component={misc} /> */}
                  <Route path="/me" component={Me} />
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
  return <div className="footer">Made by Kacper Kedzierski. Github: @Nsquik</div>;
};

export default App;
