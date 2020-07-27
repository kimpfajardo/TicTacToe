import React, { useState, useEffect } from "react";
import "./style/style.css";
import pap from './pap.m4a'
import pop from './pop.m4a'

document.title = 'TicTacToe'

const App = () => {
  let [gridArray, setGridArray] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  let array = ["", "", "", "", "", "", "", "", ""];
  let [available, setAvailable] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let availCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let [showMenu, setShowMenu] = useState(false);
  let [status, setStatus] = useState("");
  let [player, setPlayer] = useState("");
  let holdId = "";
  let random = "";
  let [haveWinner, setHaveWinner] = useState(false);
  const popSound = new Audio(pop)
  const papSound = new Audio(pap)
  // tic = ×
  // tac = o

  const tic = (index) => {
    
    array = [...gridArray];
    array[index] = "×";
    gridArray = [...array];
    setGridArray(gridArray);
    available.map((item, itemId) => {
      if (item === index + 1) {
        holdId = itemId;
      }
    });
    availCopy = [...available];
    availCopy.splice(holdId, 1);
    available = [...availCopy];
    console.log("user tic on box", index + 1);
    console.log(available);
    setAvailable(available);

    toe();

    if (!haveWinner) {
      tac(index);
    }
  };

  const tac = (index) => {
    random = Math.floor(Math.random() * gridArray.length);
    if (gridArray[random] !== "") {
      if (gridArray.includes("")) {
        tac();
      } else {
        if (!haveWinner) {
          toe();
        }
        console.log("grid full");
        setPlayer("Draw");
        haveWinner = true;
        setHaveWinner(haveWinner);
      }
    } else {
      setTimeout(() => {
        array = [...gridArray];
        array[random] = "o";
        gridArray = [...array];
        setGridArray(gridArray);
        available.map((item, itemId) => {
          if (item === random + 1) {
            holdId = itemId;
          }
        });
        availCopy = [...available];
        availCopy.splice(holdId, 1);
        available = [...availCopy];
        console.log("AI tic on box", index + 1);
        console.log(available);
        setAvailable(available);
        papSound.play()
        toe();
      }, 1000);
    }
  };

  const toe = () => {
    // CHECKING FOR X
    // HORIZONTAL CHECKING
    if (gridArray[0] === "×" && gridArray[1] === "×" && gridArray[2] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[3] === "×" && gridArray[4] === "×" && gridArray[5] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[6] === "×" && gridArray[7] === "×" && gridArray[8] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    // VERTICAL CHECKING
    if (gridArray[0] === "×" && gridArray[3] === "×" && gridArray[6] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[1] === "×" && gridArray[4] === "×" && gridArray[7] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[2] === "×" && gridArray[5] === "×" && gridArray[8] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    // DIAGONAL CHECKING
    if (gridArray[0] === "×" && gridArray[4] === "×" && gridArray[8] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[2] === "×" && gridArray[4] === "×" && gridArray[6] === "×") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "You";
      status = "win";
      setPlayer(player);
      setStatus(status);
    }

    // CHECKING FOR O
    // HORIZONTAL CHECKING
    if (gridArray[0] === "o" && gridArray[1] === "o" && gridArray[2] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[3] === "o" && gridArray[4] === "o" && gridArray[5] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[6] === "o" && gridArray[7] === "o" && gridArray[8] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    // VERTICAL CHECKING
    if (gridArray[0] === "o" && gridArray[3] === "o" && gridArray[6] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[1] === "o" && gridArray[4] === "o" && gridArray[7] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[2] === "o" && gridArray[5] === "o" && gridArray[8] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    // DIAGONAL CHECKING
    if (gridArray[0] === "o" && gridArray[4] === "o" && gridArray[8] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    if (gridArray[2] === "o" && gridArray[4] === "o" && gridArray[6] === "o") {
      haveWinner = true;
      setHaveWinner(haveWinner);
      console.log("we have a winner");
      player = "AI";
      status = "wins";
      setPlayer(player);
      setStatus(status);
    }
    return haveWinner;
  };

  const reset = () => {
    setGridArray(["", "", "", "", "", "", "", "", ""]);
    array = ["", "", "", "", "", "", "", "", ""];
    setAvailable([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    availCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    setStatus("");
    setPlayer("");
    setShowMenu(false);
    holdId = "";
    random = "";
    setHaveWinner(false);
  };

  return (
    <div className="box">
      <h1>Tic Tac Toe</h1>
      <p>made by: Kim Fajardo</p>
      <div className="grid">
        {gridArray.map((item, index) => (
          <button
            key={index}
            onClick={() => tic(index)}
            disabled={item != "" || (haveWinner && true)}
            className="tile"
            style={{
              color: item === "o" ? "rgb(43, 146, 206)" : "rgb(233, 35, 35)",
            }}
          >
            <p style={{padding:0,margin:0}}>{item}</p>
          </button>
        ))}
      </div>
      <div className="menu">
        {haveWinner && (
          <div>
            <p>{`${player} ${status}`}</p>
            <button onClick={reset}>Play Again?</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
