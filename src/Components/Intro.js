import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Intro = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/commencement">
        <button>commencer</button>
      </Link>
      <Link to="/cailloux">
        <button>cailloux</button>
      </Link>
      <Link to="/listedescailloux">
        <button>liste des cailloux</button>
      </Link>
      <Link to="/fin">
        <button>fin</button>
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
  gap: 50px;
`;
