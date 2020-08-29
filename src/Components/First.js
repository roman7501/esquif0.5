import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLocation from "../hooks/useLocation";
import dataLocations from "../data/dataLocations";
import { motion, AnimatePresence } from "framer-motion";

const First = ({ className }) => {
  const { getLocation, distance } = useLocation(dataLocations.locations[0]);
  const [isClicked, setIsClicked] = useState(false);
  const limitDistance = 5000;

  const verifLocation = () => {
    setIsClicked(true);
    getLocation();
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      className={className}
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p className="indication">
        Rends toi au banc près du Château de Vincennes
      </p>

      <div className="google">
        <motion.button whileTap={{ scale: 0.97, opacity: 0.5 }}>
          <a href="https://goo.gl/maps/hr7FAgrs9mWGzS9t7" target="blank">
            où se trouve le banc ?
          </a>
        </motion.button>
      </div>
      <div className="distance">
        {!isClicked && (
          <motion.button
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileTap={{ scale: 0.97, opacity: 0.5 }}
            onClick={verifLocation}
          >
            j'y suis
          </motion.button>
        )}
        {isClicked && !distance && (
          <motion.p
            className="resultat"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            vérification de ton emplacement...
          </motion.p>
        )}
        <AnimatePresence key={2}>
          {isClicked && distance && distance > limitDistance && (
            <motion.div
              className="resultat"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => {
                window.location.reload(false);
              }}
            >
              <p>
                tu n'es pas au bon endroit, <br />
                le banc se trouve à environ &nbsp;
                {Math.round(distance)}
                &nbsp; mètres
              </p>
              <button>ok</button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {distance && distance < limitDistance && (
            <motion.div
              className="resultat"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              assieds-toi.
              <Link to="/ecoute">
                <button>ok</button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default styled(First)`
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  min-height: 100vh;
  align-items: center;
  text-align: center;
  .indication {
    position: fixed;
    top: 100px;
    margin-bottom: 250px;
    text-align: center;
    width: 100vw;
  }
  .google {
    position: fixed;
    bottom: 130px;
    width: 100vw;
    margin: 0 auto;
  }
  .distance {
    position: fixed;
    bottom: 50px;
    width: 100vw;
    margin: 0 auto;
  }
  .resultat {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0px;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background: black;
    opacity: 0.2;
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
    border-bottom: 2px solid grey;
    padding: 1em;
    outline: transparent;
    cursor: pointer;
  }
`;
