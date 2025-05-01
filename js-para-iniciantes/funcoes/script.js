// Crie uma função para verificar se um valor é Truthy
function etrue(x){
  if (!!x) {
    return 'Esse valor é true'
  }else {
    return 'Esse valor é false'
  }
}
console.log(etrue(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function areaQuadrado(lado) {
  return lado * 4
}
console.log(areaQuadrado(4))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome
}
console.log(nomeCompleto('Lucas', 'da Silva Pereira'))
// Crie uma função que verifica se um número é par
function parImpar(n) {
  if (n % 2 === 0) {
    return `O número ${n} é par`
  }else {
    return `O número ${n} é impar`
  }
}
console.log(parImpar(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tDado(x) {
  return (typeof x)
}
console.log(tDado(true))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function() {
  console.log('Lucas Pereira')
})

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(100));
console.log(jaVisitei(15)); 
