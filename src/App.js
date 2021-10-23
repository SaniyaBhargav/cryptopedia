import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import News from "./components/News";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>

        <Route exact path="/news">
          <News />
        </Route>

        <Route exact path="/exchanges">
          <Exchanges />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
