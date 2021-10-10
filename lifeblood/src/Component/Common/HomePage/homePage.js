import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "../../AboutUsPage/AboutUs";
import Header from "../../Header/Header";
import MainSection from "../../HomePage/MainSection";
import Navbar from "../../temp/jeetu";

function HomePage()  {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <MainSection />
            </Route>
            <Route path="/home">
              <MainSection />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
  
  export default HomePage;