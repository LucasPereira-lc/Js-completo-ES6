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
