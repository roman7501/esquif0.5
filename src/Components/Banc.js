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
    position: absolute;
    top: 463px;
    left: 214px;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
  }
  .text-banc {
    position: absolute;
    top: 470px;
    left: 220px;
    font-size: 12px;
    color: white;
  }
  .allee {
    position: absolute;
    font-size: 12px;
    top: 370px;
    left: 120px;
    transform: rotate(-105deg);
    letter-spacing: 0.4em;
    color: grey;
    opacity: 0.6;
  }
`;
