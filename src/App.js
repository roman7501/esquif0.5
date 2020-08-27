import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Intro from "./Components/Intro";
import Listen from "./Components/Listen";
import Walk from "./Components/Walk";

// style
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import ListCailloux from "./Components/ListCailloux";
import First from "./Components/First";
import ListenFin from "./Components/ListenFin";

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
          <Walk />
        </Route>
        <Route path="/listedescailloux">
          <ListCailloux />
        </Route>
        <Route path="/fin">
          <ListenFin />
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
