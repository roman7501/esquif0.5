import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Intro from "./Components/Intro";
import Listen from "./Components/Listen";
import Cailloux from "./Components/Cailloux";

// style
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";

function App({ className }) {
  const location = useLocation();

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path="/ecoute">
          <Listen />
        </Route>
        <Route path="/cailloux">
          <Cailloux />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default styled(App)``;
