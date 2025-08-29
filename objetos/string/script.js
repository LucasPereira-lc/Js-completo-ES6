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
