import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Listen = ({ className }) => {
  return (
    <div className={className}>
      ecoute
      <Link to="/cailloux">
        <button>aller aux cailloux</button>
      </Link>
    </div>
  );
};

export default styled(Listen)`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
