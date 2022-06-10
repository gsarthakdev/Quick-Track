import { View, TextInput, Text, StyleSheet } from "react-native";
import { symbolicateLogNow } from "react-native/Libraries/LogBox/Data/LogBoxData";
import Input from "./Input";
function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Description" textInputConfig={{
        multiline: true,
      }} />
    </View>
  );
}

export default ExpenseForm;
