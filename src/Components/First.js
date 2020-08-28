import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLocation from "../hooks/useLocation";
import dataLocations from "../data/dataLocations";

const First = ({ className }) => {
  const { getLocation, distance } = useLocation(dataLocations.locations[0]);
  const [isClicked, setIsClicked] = useState(false);
  const limitDistance = 500;

  const verifLocation = () => {
    setIsClicked(true);
    getLocation();
  };
  return (
    <div className={className}>
      <p>Rends toi au banc près du Château de Vincennes</p>
      <div className="reponse">
        <button>
          <a href="https://goo.gl/maps/EybnfkfP2xE1Aucs5" target="blank">
            Où se trouve le banc ?
          </a>
        </button>
        <button onClick={verifLocation}>j'y suis</button>
        {isClicked && !distance && <p>vérification de ton emplacement...</p>}
        {distance && distance > limitDistance && (
          <p>
            tu n'es pas au bon endroit, le banc se trouve à environ
            {Math.round(distance)}
            &nbsp;mètres
          </p>
        )}
        {distance && distance < limitDistance && (
          <Link to="/ecoute">assis-toi.</Link>
        )}
      </div>
    </div>
  );
};

export default styled(First)`
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .reponse {
    position: fixed;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    position: fixed;
    bottom: 10px;
    height: 100px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: white;
  }
  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 14px;
  }
`;
