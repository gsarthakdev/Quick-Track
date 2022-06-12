import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import { useRoute } from "@react-navigation/native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";

function ManageExpense({ route, navigation }) {
  // const editedExpenseId = route.params?.expenseId;
  // const isEditing = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext);

  const checkEditing = route.params?.editItem;
  const isEditing = !!checkEditing;
  console.log("-----------");
  console.log(isEditing);

  if (isEditing) {
    var expenseID = route.params.expenseID;
    console.log("Expense ID:", expenseID);
  }

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === expenseID
  );

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

  async function confirmHandler(expenseData) {
    if (isEditing) {
      const expenseID = route.params.expenseID;
      expensesCtx.updateExpense(expenseID, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
