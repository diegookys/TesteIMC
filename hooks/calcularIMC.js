import{useState} from 'react';

export default function calcularIMC(){
  const[peso, setarPeso] = useState('');
  const[altura, setAltura] = useState('');
  const[imc, setImc] = useState(null);
  const[classificacao, setarClassificacao] = useState('');
  const[erro, setErro] = useState('');

const formatarAltura = (valor) =>{
  const limpo = valor.replace(/[^0-9]/g, '');
  if(limpo.length === 0) return '';
  if(limpo.length <= 2) return '0.' + limpo;

  const parteInteira = limpo.slice(0, limpo.length - 2).replace(/^0+/, ''); // remove os numeros zeros na esquerda
  const parteDecimal = limpo.slice(-2);
  return parteInteira + '.' + parteDecimal;
};

  const ajustarAltura = (valor) =>{
    const formatado = formatarAltura(valor);
    setAltura(formatado);
  };

  const calcular = () =>{
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso.replace(',', '.'));

    if(!pesoNum || pesoNum <= 0 || !alturaNum || alturaNum <= 0){
      setErro('Preencha com números o peso e a altura!');
      setImc(null);
      setarClassificacao('');
      return;
    }

    const resultado = pesoNum / (alturaNum * alturaNum);
    setImc(resultado.toFixed(2));
    setErro('');

    if(resultado < 18.5) setarClassificacao('Abaixo do peso');
    else if(resultado < 25) setarClassificacao('Peso normal');
    else if(resultado < 30) setarClassificacao('Sobrepeso');
    else if(resultado < 35) setarClassificacao('Obesidade grau 1');
    else if(resultado < 40) setarClassificacao('Obesidade grau 2');
    else setarClassificacao('Obesidade grau 3');
  };

  const limpar = () =>{
    setarPeso('');
    setAltura('');
    setImc(null);
    setarClassificacao('');
    setErro('');
  };

  return{
    peso,
    altura,
    setarPeso,
    ajustarAltura,
    imc,
    classificacao,
    erro,
    calcular,
    limpar,
  };
}