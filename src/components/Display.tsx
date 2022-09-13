import React from "react";
import { State } from "./models";
import "./all.css";

interface Iprops {
  state: State;
}

const Display: React.FC<Iprops> = ({ state }) => {
  console.log(state);
  const { totalmember, alltotalexpense } = state;
  console.log("Total expense", alltotalexpense);
  console.log("All users", totalmember.length);
  let expenseperuser: number = alltotalexpense / totalmember.length;
  const userArray: string[] = [
    "Amar",
    "Arvind",
    "Bishal",
    "Puran",
    "Sandesh",
    "Saroj",
  ];

  return (
    <div className="display-main">
      {totalmember.length > 0 ? (
        <div className="display">
          <div className="colorwhite">
            Total Expense=Rs.
            {alltotalexpense}/-
          </div>
          <div className="colorwhite">
            Expense per user=Rs.{expenseperuser.toFixed(2)}/-
          </div>
          {totalmember.map((singlemember) => {
            return (
              <div className="singlemember" key={singlemember.id}>
                <div className="username">{userArray[singlemember.id - 1]}</div>
                {singlemember.expenses.length > 0 ? (
                  <div>
                    <div className="item-heading">
                      <span>Item name</span>
                      <span>Amount(Nrs)</span>
                    </div>
                    {singlemember.expenses.map((singleexpenses) => {
                      return (
                        <div
                          className="single-item"
                          key={`${singleexpenses.expensename}${singleexpenses.expenseamount}`}
                        >
                          <span>{singleexpenses.expensename}</span>
                          <span>{singleexpenses.expenseamount}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p>No any items</p>
                )}
                {/* <hr /> */}
                <div className="single-item total-div">
                  <span>Total</span>
                  <span>{singlemember.totalexpense}</span>
                </div>

                {singlemember.totalexpense >= expenseperuser ? (
                  <div className="getting">
                    {userArray[singlemember.id - 1]} will get Rs.
                    {(singlemember.totalexpense - expenseperuser).toFixed(2)}
                  </div>
                ) : (
                  <div className="paying">
                    {userArray[singlemember.id - 1]} have to pay Rs.
                    {(expenseperuser - singlemember.totalexpense).toFixed(2)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="startcalculation">Start calculation..</p>
      )}
    </div>
  );
};

export default Display;
