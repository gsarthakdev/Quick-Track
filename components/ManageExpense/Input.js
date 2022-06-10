import {View, TextInput, Text, StyleSheet} from "react-native"; 
import { Colors } from "react-native/Libraries/NewAppScreen";
import { GlobalStyles } from "../../constants/styles";
function Input({label, textInputConfig}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text> 
      <TextInput {...textInputConfig} /> 
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4, 
    marginVertical: 16, 
  },
  label: {
    fontSize: 12, 
    color: GlobalStyles.colors.primary100
  }, 
  input: {}, 
});