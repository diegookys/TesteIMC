import{View, Text, StyleSheet} from 'react-native';

export default function ExibirResultado({ imc, classificacao }){
  return(
    <View style={styles.container}>
      <Text style={styles.resultado}>IMC: {imc}</Text>
      <Text style={styles.classificacao}>{classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    alignItems: 'center',
  },
  resultado:{
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  classificacao:{
    fontSize: 20,
    color: '#ccc',
    marginTop: 8,
  },
});