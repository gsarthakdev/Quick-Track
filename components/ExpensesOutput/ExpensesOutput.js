import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0, 
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
