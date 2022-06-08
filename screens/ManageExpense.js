import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

function ManageExpense({ route, navigation }) {
  // const editedExpenseId = route.params?.expenseId;
  // const isEditing = !!editedExpenseId;

  const checkEditing = route.params?.editItem;
  const isEditing = !!checkEditing;
  console.log("-----------");
  console.log(isEditing);
  // navigation.setOptions({
  //   title: isEditing ? "Edit Expense" : "Add Expense"
  // });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing]);

  function deleteExpenseHander() {}

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
        <IconButton 
        iconName="trash" 
        color={GlobalStyles.colors.error500} 
        size={36} 
        onPress={deleteExpenseHander}/>
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
    alignItems: 'center'
  }
})
