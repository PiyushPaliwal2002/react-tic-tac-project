import "./App.css";
import { useEffect, useState } from "react";

import Tictac from "./components/Tictac";

function App() {
  const restarter = () => {
    setMark(Array(9).fill(""));
    setWin(false);
    setDraw(false);
  };
  const winways = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);
  const [mark, setMark] = useState(Array(9).fill(""));
  const newmark = [...mark];
  const [player, setPlayer] = useState("X");
  const handleClick = (num, e) => {
    console.log("THis");
    if (mark[num] === "") {
      if (player === "X") setPlayer("O");
      else if (player === "O") setPlayer("X");
      newmark[num] = player;
      setMark(newmark);
    }
  };
  useEffect(() => {
    setPlayer(player);
  }, [player]);

  useEffect(() => {
    if (mark.indexOf("") == -1) setDraw(true);
    const checkWinner = () => {
      for (let i = 0; i < 8; i++) {
        const [a, b, c] = winways[i];
        if (mark[a] !== "" && mark[a] === mark[b] && mark[a] === mark[c]) {
          setWin(true);
          return;
        }
      }
      setWin(false);
    };

    checkWinner();
  }, [mark]);
  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      <Tictac
        handleClick={handleClick}
        restarter={restarter}
        player={player}
        mark={mark}
        draw={draw}
        win={win}
      />
    </div>
  );
}

export default App;
