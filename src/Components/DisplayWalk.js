import React from "react";
import Walk from "./Walk";

// carte
import carte from "../image/carte.png";

import styled from "styled-components";

const DisplayWalk = ({ className }) => {
  return (
    <div className={className}>
      <img src={carte} alt="carte" className="carte" />
      <Walk className="walk" />
    </div>
  );
};

export default styled(DisplayWalk)`
  .carte {
    height: 500px;
    width: 300px;
    top: 3%;
    bottom: 3%;
    left: 7%;
    right: 7%;
    position: absolute;
    z-index: 1;
  }
  .walk {
    height: 500px;
    width: 300px;
    top: 3%;
    left: 10%;
    position: absolute;
    z-index: 2;
  }
`;
