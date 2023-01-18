import "./App.css";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { AiFillStar } from 'react-icons/ai';




function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [cumple, setCumple] = useState("Feliz cumplemes");

  let x = new Date("Sun Dec 18 2022 16:00:00");
  let y = new Date();
  let diffInDays = (x - y) / (1000 * 60 * 60 * 24);

  diffInDays = Math.abs(Math.round(diffInDays));

  useEffect(() => {
    let today = y.getDate();
    let month = y.getMonth();
    let year = y.getFullYear();

    if (today === 18) {
      setIsExploding(true);
    } 

    if (today === 18 && month === 11 && year > 2022) {
      setCumple("Feliz cumpleaños");
    } else if (today === 18){
      setCumple("Feliz cumplemes");
    } else {
      setCumple("Felicidades");
    }
  });

  return (
    <>
      <div
        className="caja"
        style={{
          backgroundImage: "url(/Argentina-Campeon.jpg)",
          width: "100vw",
          height: "100vh",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="cumple">¡{cumple}!</h1>
        <h2 className="dias">
          ¡Hace {diffInDays} días que sos campeón del mundo!
        </h2>
        <div style={{display:'flex', flexDirection:'row', alignContent:'center', marginRight:'30px'}}>
          <div><AiFillStar className="stars" /></div>
          <div><AiFillStar className="stars" /></div>
          <div><AiFillStar className="stars" /></div>
          </div>
        {isExploding && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            colors={["#00aae4", "ffffff"]}
          />
        )}
      </div>
    </>
  );
}

export default App;
