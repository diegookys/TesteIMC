import{TextInput, StyleSheet} from 'react-native';

export default function Entrada({ placeholder, value, onChangeText }){
  return(
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: 8,
    padding: 16,
    fontSize: 18,
    marginBottom: 16,
  },
});