import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Useeffectruns");
    const cleanup = setInterval(() => {
      setNumber((prevnum) => prevnum + 1);
    }, 1000);

    return () => {
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div>
      {number}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1 className="headingone">ABCDEFGHIJKLMNOP</h1>
    </div>
  );
};

export default UseEffect;
