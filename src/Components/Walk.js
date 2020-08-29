import React, { useEffect } from "react";
import Cailloux from "./Cailloux";
import Banc from "./Banc";

// Styles
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Chemin
import Chemin from "./Chemin";
import useWalk from "../hooks/useWalk";

const Walk = ({ className }) => {
  const {
    isDraw,
    initialStep,
    nextStep,
    agrandirChemin,
    assombrirChemin,
    displayText,
    isInactive,
    setIsInactive,
    isClicked,
    caillou,
    caillouSuivant,
    sonFinal,
    isPlay,
    isBanc,
    setIsBanc,
  } = useWalk();

  useEffect(() => {
    setTimeout(() => {
      agrandirChemin();
      setIsBanc(false);
    }, 150000);
    // eslint-disable-next-line
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const indicationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 155,
        duration: 4,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.5,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const buttonFinalVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const finalVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 10,
        duration: 140,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const finalTextVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 170,
        duration: 5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <>
      <div className={className}>
        <AnimatePresence>
          {isBanc && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Banc />
            </motion.div>
          )}
        </AnimatePresence>
        <Chemin
          className="chemin"
          isDraw={isDraw}
          initialStep={initialStep}
          nextStep={nextStep}
          agrandirChemin={agrandirChemin}
          assombrirChemin={assombrirChemin}
          isPlay={isPlay}
        />
        {isPlay && (
          <motion.div
            className="final"
            variants={finalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.p variants={finalTextVariants}>
              fin du premier esquif
            </motion.p>
          </motion.div>
        )}
        {caillou === 0 && (
          <Cailloux
            className="caillou"
            index={0}
            titre="le foyer (100 pas)"
            text=" "
            pathSvg="M3.3913,18.49C.8833,23.2136-.4716,28.8946,1.3161,33.9354c1.6568,4.6719,5.7292,8.0728,10,10.59A50.6126,50.6126,0,0,0,48.7285,49.99c4.9021-1.2126,9.9256-3.423,12.5972-7.7083,3.1483-5.05,2.2177-11.6489.1261-17.22C57.2864,13.9664,48.2237,1.6734,35.9818.6106,23.0132-.5152,9.4612,7.0569,3.3913,18.49Z"
            pY={180}
            pX={-110}
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            setIsInactive={setIsInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={165}
          />
        )}
        <AnimatePresence>
          {caillou === 0 && displayText === false && (
            <>
              <motion.div
                className="indication"
                variants={indicationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p>
                  suis le chemin et va au premier caillou
                  <br />
                  <br />
                  <br />
                </p>
                <p style={{ opacity: 0.4 }}>
                  (le 1er caillou est à environ 100 pas)
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {caillou === 0 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                Ici je fais un feu bonne
                <br />
                <br />
                <br />
                &nbsp; idée <br />
                &nbsp; &nbsp; &nbsp;avec les mains &nbsp; &nbsp;dessus et les
                joues comme &nbsp; &nbsp; &nbsp; &nbsp;
                <br />
                les pommes rouges comme sur <br />
                <br />
                le &nbsp; &nbsp; &nbsp;sapin oui &nbsp; &nbsp;je me souviens
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 1 && (
          <Cailloux
            index={1}
            pathSvg="M11.7159,2.3662C6.7394,3.8382,2.0612,7.3843.6811,12.3871c-1.9924,7.2223,3.2644,14.3534,8.7374,19.47A100.3741,100.3741,0,0,0,43.4328,52.7516c10.9112,3.983,24.3918,5.58,33.069-2.1418,7.63-6.79,8.5837-19.1239,3.8683-28.1841S66.3717,7.3732,56.6045,4.3857C43.7211.445,24.9158-1.5383,11.7159,2.3662Z"
            pY={80}
            pX={-110}
            titre="la clairère des 3 arbres"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={14}
          />
        )}
        <AnimatePresence>
          {caillou === 1 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                J’aime bien <br />
                ici <br />
                <br />
                C’est tra&nbsp;nquille <br />
                ici L’&nbsp;herbe est <br />
                douce sous les pieds <br />
                et il y a &nbsp;de la &nbsp;place pour joueret on <br />
                peut se <br />
                suspendre où on veut la &nbsp;&nbsp;&nbsp;tête en bas alors on
                voit le ciel comme la terre
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 2 && (
          <Cailloux
            index={2}
            pathSvg="M14.6146,1.659c-4.7437-.407-10.241.3256-12.9224,4.26-3.4141,5.009-.206,11.8678,3.7978,16.4193a51.5261,51.5261,0,0,0,22.95,14.986c6.0071,1.9084,13.667,2.2038,17.4831-2.8126,2.5073-3.2958,2.4717-7.8028,2.3258-11.9414l-.3009-8.5315c-.1219-3.4572-.3333-7.1712-2.47-9.8939C39.6243-3.3115,22.7945,2.3606,14.6146,1.659Z"
            pY={170}
            pX={-20}
            titre="l’arbre aux bulbons"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={14}
          />
        )}
        <AnimatePresence>
          {caillou === 2 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                Il a des boutons lui si je les pique est-ce qu’ils explosent et
                la sève coule mais c’est rugueux même si j’appuie fort ça ne
                marche pas je lui donne un coup de pied
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 3 && (
          <Cailloux
            index={4}
            pathSvg="M15.929,1.0781C10.14,2.1694,4.4406,5.3547,1.7884,10.6153c-3.9076,7.751.09,17.61,6.8071,23.1082S24.07,41.3972,32.511,43.4207c4.329,1.0377,8.7457,2.0829,13.1834,1.73s8.9812-2.3436,11.2985-6.1446c2.4224-3.9732,1.9575-9.1851-.0212-13.3969s-5.27-7.6408-8.5026-10.9876C37.8,3.5766,32.1-1.9678,15.929,1.0781Z"
            pY={125}
            pX={-50}
            titre="l’arbre blanc"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={10}
          />
        )}{" "}
        <AnimatePresence>
          {caillou === 3 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                Ils ont planté une graine ce matin je vais le voir grandir
                celui-là je le connaîtrais par coeur J’aurais tout vu
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 4 && (
          <Cailloux
            index={3}
            pathSvg="M29.4166,2.4365C17.1779,8.2011,6.7665,18.3654,2.111,31.0674-.2695,37.5625-.8987,45.4705,3.45,50.85c4.07,5.0344,11.1073,6.2925,17.5159,7.2083,14.3875,2.0558,30.5767,3.6676,42.0249-5.2859,8.1805-6.3979,12.1938-19.2,12.6457-29.5756.3993-9.1655-2.88-14.9326-12.5314-18.5683C53.0776.8514,38.508-1.8457,29.4166,2.4365Z"
            pY={90}
            pX={-30}
            titre="le petit bouton de sève"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={14}
          />
        )}
        <AnimatePresence>
          {caillou === 4 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                Il a un diamant rouge Tiens Comme un rubis d’un roi Je me
                souviens
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 5 && (
          <Cailloux
            index={5}
            pathSvg="M2.7232,33.6388C6.4711,40.7925,13.5354,45.89,21.2638,48.2335c9.3264,2.8287,20.8745,1.1791,26.5046-6.776C57.8211,27.2534,43.0053,4.5632,27.8778.8769,9.3346-3.6417-5.8933,17.1922,2.7232,33.6388Z"
            pY={-40}
            pX={-150}
            titre="les bûches"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={14}
          />
        )}
        <AnimatePresence>
          {caillou === 5 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>J’aimerais qu’il y ait quelqu’un Avec moi</motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 6 && (
          <Cailloux
            index={6}
            pathSvg="M19.9269,1.38C11.0647,3.3887,2.9247,9.9713.8024,18.807-1.646,29.0009,4.3455,39.75,12.8281,45.9107s19.0167,8.6586,29.2886,10.7557c5.7622,1.1765,12.3531,2.0951,17.0077-1.5,5.8023-4.4811,5.3344-13.3315,3.4489-20.4161C56.7159,12.743,45.3864-4.3918,19.9269,1.38Z"
            pY={-180}
            pX={-180}
            titre="cabane"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={14}
          />
        )}
        <AnimatePresence>
          {caillou === 6 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                Ils coupent et ils assemblent C’est nouveau c’est quoi Et ça
                <br />
                <br />
                C’est quoi <br />
                Il y a un garçon <br />
                <br />
                qui monte <br />
                dessus 
                <br />
                <br /> Ça bascule Je veux rester ici toute ma vie
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 7 && (
          <Cailloux
            index={7}
            pathSvg="M29.4166,7.8078C17.1779,13.5724,6.7665,23.7366,2.111,36.4387-.269,42.9337-.899,50.8418,3.45,56.2214,7.52,61.2559,14.5574,62.514,20.966,63.43c14.3875,2.0558,30.5767,3.6676,42.0249-5.2859,8.1805-6.3978,12.0432-17.1072,12.4952-27.4827.3992-9.1655.7128-25.5586-8.9387-29.1942C56.52-2.31,38.508,3.5256,29.4166,7.8078Z"
            pY={-170}
            pX={-80}
            titre="sable noir"
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={14}
          />
        )}
        <AnimatePresence>
          {caillou === 7 && displayText === true && (
            <motion.div
              className="text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p>
                M’enfonce Confortable <br />
                M’étale <br />
                Dessins <br />
                <br />
                avec les doigts <br />
                Des visages un tourbillon
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
                onClick={caillouSuivant}
              >
                aller au caillou suivant
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {caillou === 8 && (
          <Cailloux
            index={8}
            pathSvg="M29.4166,7.8078C17.1779,13.5724,6.7665,23.7366,2.111,36.4387-.269,42.9337-.899,50.8418,3.45,56.2214,7.52,61.2559,14.5574,62.514,20.966,63.43c14.3875,2.0558,30.5767,3.6676,42.0249-5.2859,8.1805-6.3978,12.0432-17.1072,12.4952-27.4827.3992-9.1655.7128-25.5586-8.9387-29.1942C56.52-2.31,38.508,3.5256,29.4166,7.8078Z"
            pY={-80}
            pX={110}
            titre=""
            displayText={displayText}
            agrandirChemin={agrandirChemin}
            assombrirChemin={assombrirChemin}
            isInactive={isInactive}
            isClicked={isClicked}
            caillou={caillou}
            time={17}
          />
        )}
        <AnimatePresence>
          {caillou === 8 && displayText === true && (
            <motion.div
              className="text-final"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={buttonFinalVariants}
                className="button-final"
                initial="hidden"
                animate="visible"
                exit="exit"
                key="button"
              >
                <motion.button
                  onClick={sonFinal}
                  whileTap={{ scale: 0.97, opacity: 0.5 }}
                >
                  écoute moi en marchant vers le château
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {isPlay && (
          <audio
            autoPlay={true}
            src="https://firebasestorage.googleapis.com/v0/b/esquif-f53eb.appspot.com/o/Mer4.mp3?alt=media&token=07535836-6ca4-40b0-8128-4be45d0de505"
          ></audio>
        )}
      </div>
    </>
  );
};

export default styled(Walk)`
  .text {
    position: fixed;
    top: 0;
    left: 0;
    padding: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
    height: 100vh;
    width: 100vw;
  }

  .text p {
    font-family: ten-oldstyle, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    text-align: justify;
  }
  .text .titre {
    font-family: ten-oldstyle, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    opacity: 0.6;
  }
  .text button {
    background: transparent;
    border: none;
    color: white;
    border-bottom: 2px solid grey;
    padding: 1em;
    outline: transparent;
    cursor: pointer;
    margin-top: 50px;
    opacity: 0.6;
  }

  .chemin {
    height: 500px;
    width: 300px;
    position: absolute;
  }
  .indication {
    position: fixed;
    top: 40%;
    width: 90%;
    left: 15px;
    font-size: 14px;
    text-align: center;
  }
  .text-final {
    position: fixed;
    top: 0;
    left: 0;
    padding: 3em;
    background: black;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .final {
    position: fixed;
    top: 0;
    left: 0;
    padding: 3em;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #303030;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  .final p {
    margin-top: 424px;
    color: #9abdff;
  }
  .button-final button {
    background: transparent;
    border: none;
    color: white;
    border-bottom: 2px solid grey;
    padding: 1em;
    outline: transparent;
    cursor: pointer;
  }
`;
