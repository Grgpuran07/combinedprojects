import React, { useState, useRef } from "react";
import "./styles.css";

const Draggable = () => {
  const dragItem = useRef<{}>();
  const dragOveritem = useRef<{}>();
  const [list, setlist] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
  ]);

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    // e.preventDefault();
    dragItem.current = position;
    // console.log(e.target);
    // console.log(dragItem.current);
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragOveritem.current = position;
  };

  const dragEnd = () => {
    const copyitems = [...list];
    // console.log(dragItem.current);
    // console.log(dragOveritem.current);
    // const toinsertitem = copyitems[Number(dragItem.current)];
    // copyitems.splice(Number(dragItem.current), 1);
    // copyitems.splice(Number(dragOveritem.current), 0, toinsertitem);
    const toinsertitem = copyitems[Number(dragItem.current)];
    copyitems[Number(dragItem.current)] =
      copyitems[Number(dragOveritem.current)];
    copyitems[Number(dragOveritem.current)] = toinsertitem;

    setlist(copyitems);
    dragItem.current = {};
    dragOveritem.current = {};
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div
            className="itemclass"
            key={index}
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={dragEnd}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Draggable;
