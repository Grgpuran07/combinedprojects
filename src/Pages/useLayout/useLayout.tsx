import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayout = () => {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    console.log("This is from useLayoutEffect.");
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a pop up
        </div>
      )}
    </div>
  );
};

export default UseLayout;
