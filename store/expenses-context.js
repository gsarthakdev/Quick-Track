import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Purchased groceries",
    amount: 38.99,
    date: new Date("2022-06-15"),
  },
  {
    id: "e2",
    description: "Clothes",
    amount: 45.99,
    date: new Date("2022-05-13"),
  },
  {
    id: "e3",
    description: "Gasoline",
    amount: 68.99,
    date: new Date("2022-05-28"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 9.99,
    date: new Date("2022-01-12"),
  },
  {
    id: "e5",
    description: "Apples",
    amount: 10.99,
    date: new Date("2022-02-14"),
  },
  {
    id: "e6",
    description: "Purchased groceries",
    amount: 38.99,
    date: new Date("2022-06-15"),
  },
  {
    id: "e7",
    description: "Clothes",
    amount: 45.99,
    date: new Date("2022-05-13"),
  },
  {
    id: "e8",
    description: "Gasoline",
    amount: 68.99,
    date: new Date("2022-05-28"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 9.99,
    date: new Date("2022-01-12"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      console.log(id);
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
       {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
