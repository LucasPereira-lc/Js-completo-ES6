// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 18
var idadePrimo = 32
var teste = (minhaIdade > idadePrimo)
if (teste) {
  console.log('Sim, é maior')
}else if (minhaIdade === idadePrimo) {
  console.log('É igual')
}else {
  console.log('Não, é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false
console.log(!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('A população do Brasil é maior que a da china.')
}else if (china > brasil) {
  console.log('A população da China é maior que a do Brasil.')
}else {
  console.log('A população do Brasil e da China são iguais.')
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}