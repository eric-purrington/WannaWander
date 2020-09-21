import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BackgroundImage from "./components/BackgroundImage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

function App() {
  return (
    < Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;