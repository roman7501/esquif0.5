import React from "react";
import styled from "styled-components";

const Banc = ({ className }) => {
  return (
    <div className={className}>
      <div className="banc"></div>
      <p className="text-banc">banc</p>
      <p className="allee">grande allée</p>
    </div>
  );
};

export default styled(Banc)`
  .banc {
    position: fixed;
    top: 475px;
    left: 225px;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
  }
  .text-banc {
    position: fixed;
    font-size: 12px;
    top: 485px;
    left: 230px;
    color: white;
  }
  .allee {
    position: fixed;
    font-size: 12px;
    top: 370px;
    left: 125px;
    transform: rotate(-105deg);
    letter-spacing: 0.4em;
    color: grey;
    opacity: 0.6;
  }
`;
