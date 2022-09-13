import { Action } from "./models";
import { Actiontypes } from "./models";

export const addRent = (rent: number): Action => {
    return {
      type: Actiontypes.addrent,
      payload: rent,
    };
  };

export const addMember = (
    id: number,
    expensename: string,
    expenseamount: number
  ): Action => {
    return {
      type: Actiontypes.addmember,
      payload: {
        id,
        expensename,
        expenseamount,
      },
    };
  };