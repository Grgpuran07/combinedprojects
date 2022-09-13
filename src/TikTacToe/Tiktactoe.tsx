import React, { useEffect, useState } from "react";
import "./style.css";
import circle from "./circle.svg";
import cross from "./cross.svg";
import { winningconditions } from "./models";

interface score {
  x: number;
  o: number;
}

const Tiktactoe = () => {
  const newarr = ["", "", "", "", "", "", "", "", ""];
  const [array, setArray] = useState<string[]>([
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
  const [turn, setTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>("");
  const [wincounter, setwincounter] = useState<score>({ x: 0, o: 0 });

  useEffect(() => {
    if (winner === "x") {
      setwincounter((prev) => ({
        ...prev,
        x: prev.x + 1,
      }));
    } else if (winner === "o") {
      console.log("This runs");
      setwincounter((prev) => ({
        ...prev,
        o: prev.o + 1,
      }));
    }
    return;
  }, [winner]);

  useEffect(() => {
    for (let i = 0; i < winningconditions.length; i++) {
      const [a, b, c] = winningconditions[i];
      if (array[a] !== "" && array[a] === array[b] && array[b] === array[c]) {
        setWinner(array[a]);
      } else {
        continue;
      }
    }
  }, [array]);

  const handleClick = (ind: number) => {
    console.log("Clicked ", ind);
    if (turn) {
      array[ind] = "o";
      setArray([...array]);
      setTurn((prev) => !prev);
    } else {
      array[ind] = "x";
      setArray([...array]);
      setTurn((prev) => !prev);
    }
  };
  return (
    <div className="main-div">
      <div className="scoreboard">
        <span>O score: {wincounter.o}</span>
        <span>X score: {wincounter.x}</span>
      </div>
      <div className="box-div">
        {array.map((item, ind) => {
          return (
            <div key={ind} className="single-div">
              {item === "" ? (
                <div
                  onClick={() => handleClick(ind)}
                  style={{ height: "100%", width: "100%" }}
                ></div>
              ) : item === "x" ? (
                <div className="icon">
                  <img src={cross} />
                </div>
              ) : (
                <div className="icon">
                  <img src={circle} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setArray(newarr);
          setTurn(true);
          setWinner("");
        }}
      >
        New game
      </button>
      {winner === "" ? null : (
        <div className="winning-message">
          {winner.length === 1 ? `${winner} wins the game` : `${winner}`}
        </div>
      )}
    </div>
  );
};

export default Tiktactoe;
