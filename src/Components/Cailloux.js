import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cailloux = ({ className }) => {
  return (
    <div className={className}>
      cailloux
      <Link to="/">
        <button>retour au début</button>
      </Link>
      <video autoPlay>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/esquif-f53eb.appspot.com/o/cabane.m4v?alt=media&token=580bcc3d-b96e-47be-ad53-9d3a45035d3d"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};

export default styled(Cailloux)`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  video {
    width: 100vw;
  }
`;
