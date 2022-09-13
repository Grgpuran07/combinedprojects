import { State } from "./models";
import { Action } from "./models";
import { Actiontypes } from "./models";


const initialState: State = {
    totalrent: 0,
    totalmember: [],
    alltotalexpense: 0,
};
export const reducers = (state: State = initialState, action: Action): State => {
    const { type, payload } = action;
    switch (type) {
      case Actiontypes.addrent:
        return {
          ...state,
          totalrent: payload,
        };

      case Actiontypes.addmember:
        const { id, expenseamount, expensename } = payload;
        const isPresent = state.totalmember.find(
          (singlemember) => singlemember.id === id
        );

        if (!isPresent) {
          return {
            ...state,
            totalmember: [
              ...state.totalmember,
              {
                id,
                expenses: [
                  {
                    expenseamount,
                    expensename,
                  },
                ],
                totalexpense: expenseamount,
              },
            ],
            alltotalexpense:state.alltotalexpense+expenseamount
          };
        } else {
          return {
            ...state,
            totalmember: [...state.totalmember].map((singlemember) => {
              if (singlemember.id === id) {
                return {
                  ...singlemember,
                  expenses: [
                    ...singlemember.expenses,
                    {
                      expensename,
                      expenseamount,
                    },
                  ],
                  totalexpense: singlemember.totalexpense + expenseamount,
                };
              } else {
                return singlemember;
              }
            }),
            alltotalexpense:state.alltotalexpense+expenseamount
          };
        }
      default:
        return state;
    }
  };