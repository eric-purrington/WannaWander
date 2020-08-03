import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutCanvas from "./components/AboutCanvas";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    < Router >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route component={NoMatch} />
      </Switch>
      <MobileMenu />
      <AboutCanvas />
    </Router >
  );
}

export default App;