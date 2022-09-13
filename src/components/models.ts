interface Expenses {
    expensename: string;
    expenseamount: number;
  }
  
interface Member {
    id: number;
    expenses: Expenses[];
    totalexpense: number;
  }

export  interface State {
    totalrent: number;
    totalmember: Member[];
    alltotalexpense: number;
  }

 export  enum Actiontypes {
    addrent = "ADD_RENT",
    addmember = "ADD_MEMBER",
  }
  
 export type Payload = {
    id: number;
    expensename: string;
    expenseamount: number;
  };
  
 export type Action =
    | {
        type: typeof Actiontypes.addrent;
        payload: number;
      }
    | {
        type: typeof Actiontypes.addmember;
        payload: Payload;
      };

// export type Action = {
//     type:typeof Actiontypes.addrent | typeof Actiontypes.addmember
//     payload:number|Payload
// }