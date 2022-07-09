import { FlatList, ScrollView } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem 
    description={itemData.item.description}
    amount={itemData.item.amount}
    date={itemData.item.date}
    id={itemData.item.id}
    />
  );
}

function ExpensesList({ expenses }) {
  return (
    // <ScrollView nestedScrollEnabled={true}>
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        paddingBottom: 75
      }}
    />
    // </ScrollView>
  );
}

export default ExpensesList;
