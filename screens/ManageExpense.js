import { Text, View, StyleSheet, } from "react-native";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import { useRoute } from "@react-navigation/native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm"

function ManageExpense({ route, navigation }) {
  // const editedExpenseId = route.params?.expenseId;
  // const isEditing = !!editedExpenseId;

  const checkEditing = route.params?.editItem;
  const isEditing = !!checkEditing;
  console.log("-----------");
  console.log(isEditing);

  if (isEditing) {
    const expenseID = route.params.expenseID;
    console.log("Expense ID:", expenseID);
  }

  

  const expensesCtx = useContext(ExpensesContext);

  // navigation.setOptions({
  //   title: isEditing ? "Edit Expense" : "Add Expense"
  // });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing]);

  function deleteExpenseHander() {
    const expenseID = route.params.expenseID;
    expensesCtx.deleteExpense(expenseID);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      const expenseID = route.params.expenseID;
      expensesCtx.updateExpense(expenseID, {
        description: "Test updated",
        amount: 21.99,
        date: new Date("2022-06-08"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2022-06-06"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm/>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHander}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
