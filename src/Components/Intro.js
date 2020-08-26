import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Intro = ({ className }) => {
  return (
    <div className={className}>
      intro
      <Link to="/ecoute">
        <button>ecoute</button>
      </Link>
      <Link to="/cailloux">
        <button>cailloux</button>
      </Link>
    </div>
  );
};

export default styled(Intro)`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
