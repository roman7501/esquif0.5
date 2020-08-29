import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";

// style
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import First from "./Components/First";
import Banc from "./Components/Banc";
import DisplayWalk from "./Components/DisplayWalk";
import Home from "./Components/Home";
import Listen from "./Components/Listen";

function App({ className }) {
  const location = useLocation();

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path="/commencement">
          <First />
        </Route>
        <Route path="/ecoute">
          <Listen />
        </Route>
        <Route path="/cailloux">
          <DisplayWalk />
        </Route>
        <Route path="/banc">
          <Banc />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default styled(App)``;
