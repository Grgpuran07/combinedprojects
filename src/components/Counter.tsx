import React, { useReducer, useState } from "react";
import Display from "./Display";
import { State } from "./models";
import { reducers } from "./reducers";
import { addRent } from "./actioncreators";
import { addMember } from "./actioncreators";
import "./all.css";

const Counter: React.FC = () => {
  const initialState: State = {
    totalrent: 0,
    totalmember: [],
    alltotalexpense: 0,
  };

  const [state, dispatch] = useReducer(reducers, initialState);
  const [rentamount, setRentamount] = useState<number>(0);
  const [uservalue, setUservalue] = useState<number>(0);
  const [expensename, setExpensename] = useState<string>("");
  const [expenseamount, setExpenseamount] = useState<number>(0);

  const handleAdd = () => {
    if (!uservalue || !setExpensename || !setRentamount) {
      alert("Please Enter all");
      return;
    }
    dispatch(addMember(uservalue, expensename, expenseamount));
    setExpenseamount(0);
    setExpensename("");
  };
  return (
    <div className="counter">
      <input
        className="inputclass"
        type="number"
        onChange={(e) => setRentamount(Number(e.target.value))}
      />
      <button
        className="buttonclass"
        onClick={() => dispatch(addRent(rentamount))}
      >
        Add rent
      </button>
      <div className="rentclass">
        Rent Amount per person:Rs.{state.totalrent / state.totalmember.length}/-
      </div>
      <select
        className="selectclass"
        onChange={(e) => setUservalue(Number(e.target.value))}
      >
        <option value="1">Amar</option>
        <option value="2">Arvind</option>
        <option value="3">Bishal</option>
        <option value="4">Puran</option>
        <option value="5">Sandesh</option>
        <option value="6">Saroj</option>
      </select>
      <input
        className="inputclass"
        type="text"
        placeholder="Expense name"
        value={expensename}
        onChange={(e) => setExpensename(e.target.value)}
      />
      <input
        className="inputclass"
        type="number"
        placeholder="Expense amount"
        value={expenseamount}
        onChange={(e) => setExpenseamount(Number(e.target.value))}
      />
      <button className="buttonclass" onClick={handleAdd}>
        Add
      </button>
      <Display state={state} />
    </div>
  );
};

export default Counter;
