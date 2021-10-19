import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUsPage/AboutUs";
// import Header from "./Components/Header/Header";
import MainSection from "./Components/HomePage/MainSection";
import Navbar from "./Components/temp/jeetu";
import Feed from "./Components/Feed/Feed";
import NewRequest from "./Components/NewRequest/NewRequest";

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <Header /> */}
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
          <Route path='/feed'>
            <Feed />
          </Route>
          <Route path='/nearby'>
          </Route>
          <Route path='/register'>

          </Route>
          <Route path='/login'>

          </Route>

          <Route path='/request'>
            <NewRequest />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
