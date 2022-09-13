import React, { useEffect, useRef, useState } from "react";
import { arrayone } from "./models";
import { colorcollection } from "./models";
import "./styles.css";

const Candycrush = () => {
  const [displayarray, setDisplayarray] = useState<string[]>(arrayone);
  const draggingItem = useRef<{}>();
  const dragoverItem = useRef<{}>();

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    draggingItem.current = position;
    console.log(draggingItem);
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragoverItem.current = position;
    console.log(dragoverItem);
  };

  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 4; j++) {
        let ind = i * 7 + j;
        if (displayarray[ind] === "") {
          continue;
        } else if (
          displayarray[ind] == displayarray[ind + 1] &&
          displayarray[ind + 1] === displayarray[ind + 2] &&
          displayarray[ind + 2] == displayarray[ind + 3]
        ) {
          displayarray[ind] =
            displayarray[ind + 1] =
            displayarray[ind + 2] =
              "";
          setDisplayarray([...displayarray]);
          console.log("Display arrray after modification 4 col:", displayarray);
        } else {
          continue;
        }
      }
    }

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 5; j++) {
        let ind = i * 7 + j;
        if (displayarray[ind] === "") {
          continue;
        } else if (
          displayarray[ind] === displayarray[ind + 1] &&
          displayarray[ind + 1] === displayarray[ind + 2]
        ) {
          displayarray[ind] =
            displayarray[ind + 1] =
            displayarray[ind + 2] =
              "";
          setDisplayarray([...displayarray]);
          console.log("display arrray after modification 3 col:", displayarray);
        } else {
          continue;
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        let ind = i * 7 + j;
        if (displayarray[ind] === "") {
          continue;
        } else if (
          displayarray[ind] == displayarray[ind + 7] &&
          displayarray[ind] == displayarray[ind + 14]
        ) {
          displayarray[ind] =
            displayarray[ind + 7] =
            displayarray[ind + 14] =
              "";
          setDisplayarray([...displayarray]);
          console.log(
            "Display arrray after modification 3 rows:",
            displayarray
          );
        }
      }
    }

    // move to square below if it is empty
    for (let i = 0; i < 7; i++) {
      if (displayarray[i] == "") {
        displayarray[i] =
          colorcollection[Math.floor(Math.random() * colorcollection.length)];
        setDisplayarray([...displayarray]);
      }
    }

    for (let i = 0; i < 42; i++) {
      if (displayarray[i] !== "" && displayarray[i + 7] === "") {
        let temp = displayarray[i];
        displayarray[i] = displayarray[i + 7];
        displayarray[i + 7] = temp;
        setDisplayarray([...displayarray]);
      } else {
        continue;
      }
    }

    // return;s
  }, [displayarray]);

  const isValid = (): boolean => {
    if (
      (displayarray[Number(dragoverItem.current) + 1] ===
        displayarray[Number(dragoverItem.current) + 2] &&
        displayarray[Number(draggingItem.current)] ===
          displayarray[Number(dragoverItem.current) + 1]) ||
      (displayarray[Number(dragoverItem.current) - 1] ===
        displayarray[Number(dragoverItem.current) - 2] &&
        displayarray[Number(draggingItem.current)] ===
          displayarray[Number(dragoverItem.current) - 1]) ||
      (displayarray[Number(dragoverItem.current) - 7] ===
        displayarray[Number(dragoverItem.current) - 14] &&
        displayarray[Number(draggingItem.current)] ===
          displayarray[Number(dragoverItem.current) - 7]) ||
      (displayarray[Number(dragoverItem.current) + 7] ===
        displayarray[Number(dragoverItem.current) + 14] &&
        displayarray[Number(draggingItem.current)] ===
          displayarray[Number(dragoverItem.current) + 7]) ||
      (displayarray[Number(dragoverItem.current) - 1] ===
        displayarray[Number(dragoverItem.current) + 1] &&
        displayarray[Number(draggingItem.current)] ===
          displayarray[Number(dragoverItem.current) + 1]) ||
      (displayarray[Number(dragoverItem.current) - 7] ===
        displayarray[Number(dragoverItem.current) + 7] &&
        displayarray[Number(draggingItem.current)] ===
          displayarray[Number(dragoverItem.current) + 7])
    ) {
      return true;
    }
    return false;
  };

  const dragEnd = () => {
    if (
      (Number(dragoverItem.current) === Number(draggingItem.current) + 1 ||
        Number(dragoverItem.current) === Number(draggingItem.current) - 1 ||
        Number(dragoverItem.current) === Number(draggingItem.current) - 7 ||
        Number(dragoverItem.current) === Number(draggingItem.current) + 7) &&
      isValid()
    ) {
      let copyarray = [...displayarray];
      let temp = copyarray[Number(draggingItem.current)];
      copyarray[Number(draggingItem.current)] =
        copyarray[Number(dragoverItem.current)];
      copyarray[Number(dragoverItem.current)] = temp;
      setDisplayarray(copyarray);
      draggingItem.current = { current: -1 };
      dragoverItem.current = { current: -1 };
    } else {
      draggingItem.current = { current: -1 };
      dragoverItem.current = { current: -1 };
      return;
    }
  };
  //   console.log(draggingItem.current);
  //   console.log(dragoverItem.current);
  console.log(displayarray);
  return (
    <div className="main-div">
      <div className="center-div">
        {displayarray.map((item, index) => {
          return (
            <div
              key={index}
              className="single-div"
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={dragEnd}
              style={{ backgroundColor: `${item}` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Candycrush;
