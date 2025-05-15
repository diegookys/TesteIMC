import{StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import calcularIMC from './hooks/calcularIMC';
import Entrada from './components/Entrada';
import ExibirResultado from './components/ExibirResultado';

export default function App(){
  const{
    peso,
    altura,
    setarPeso,
    ajustarAltura,
    imc,
    classificacao,
    erro,
    calcular,
    limpar,
  } = calcularIMC();

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>

      <Entrada placeholder="Peso (kg)" value={peso} onChangeText={setarPeso} />
      <Entrada placeholder="Altura (m)" value={altura} onChangeText={ajustarAltura} />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.botaoTexto}>CALCULAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoLimpar} onPress={limpar}>
        <Text style={styles.botaoTexto}>LIMPAR</Text>
      </TouchableOpacity>

      {imc && <ExibirResultado imc={imc} classificacao={classificacao} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 28,
    color: '#1DB954',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  botao:{
    backgroundColor: '#1DB954',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoLimpar:{
    backgroundColor: '#535353',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  botaoTexto:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  erro:{
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});