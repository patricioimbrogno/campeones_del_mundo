import "./App.css";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [cumple, setCumple] = useState("cumplemes");

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
      setCumple("cumpleaños");
    } else {
      setCumple("cumplemes");
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
        <h1 className="cumple">¡Feliz {cumple}!</h1>
        <h2 className="dias">
          ¡Hace {diffInDays} días que sos campeón del mundo!
        </h2>
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
