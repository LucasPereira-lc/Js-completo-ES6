var possuiGraduacao = true
var posGraduacao = false

if (posGraduacao) {
  console.log('Possui pós-graduação e graduação')
  var x = 10
}else if (possuiGraduacao){
  console.log('Possui apenas graduação')
}else {
  console.log('Não possui graduação e nem pós-graduação')
}
console.log(x)

// Falsy
/* if(false)
  if(0) // ou -0
  if(NaN)
  if(null)
  if(undefined)
  if('') // ou "" ou `` */
  
// Truthy
/* if(true)
  if(1)
  if(' ')
  if('andre')
  if(-5)
  if({}) */

var nome = ''
if (nome) {
  console.log(nome)
}else {
  console.log('Nome não existe')
}

if (!possuiGraduacao) {
  console.log('Não possui graduação prt2')
}else {
  console.log ('Possui graduação prt2')
}

/* Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false */

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

var condicional = (5 - 10) && (10 - 8)
if ((5 - 10) && (10 - 8)) {
  console.log('Verdadeiro', condicional)
}else {
  console.log('False')
}

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2)
if ((5 - 5) || (5 + 5) && (10 - 2)) {
  console.log('Verdadeiro', condicional2)
}else {
  console.log('False')
}

var corFavorita = 'Vermelho'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu!')
    break
  case 'Branco':
    console.log('Olhe para as nuvens!')
    break
  case 'Vermelho':
    console.log('Olhe para rosas!')
    break
  case 'Amarelo':
    console.log('Olhe para o sol!')
    break
  default:
    console.log('Feche os olhos!')
}