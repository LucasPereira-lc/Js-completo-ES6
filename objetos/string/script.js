const comida = 'Pizza'
const agua = new String('Agua')

const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a

console.log(frase.charAt(0))

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase2.concat(linguagem, '!!');


const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 10))

console.log(fruta.endsWith('nana'))

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(-2))

const instrumento = 'Guitarra';

console.log(fruta.lastIndexOf('a'))

const preco = 'R$ 99,00'
console.log(preco.padEnd(20,'.'))

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ')

const arrayLista = listaItens.split(' ')
