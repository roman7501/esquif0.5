import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Intro from "./Components/Intro";
import Listen from "./Components/Listen";

// style
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import ListCailloux from "./Components/ListCailloux";
import First from "./Components/First";
import ListenFin from "./Components/ListenFin";
import Chemin from "./Components/Chemin";
import Banc from "./Components/Banc";
import DisplayWalk from "./Components/DisplayWalk";

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
        <Route path="/listedescailloux">
          <ListCailloux />
        </Route>
        <Route path="/fin">
          <ListenFin />
        </Route>
        <Route path="/chemin">
          <Chemin />
        </Route>
        <Route path="/banc">
          <Banc />
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
