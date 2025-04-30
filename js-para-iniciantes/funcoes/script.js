function areaQuadrado(lado) {
  return lado * lado
}
console.log(areaQuadrado(4))

function soma(n1, n2=0) {
  return n1 + n2
}
console.log(soma(2, 4))

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total)

function imc(peso, altura) {
  var imc = peso / (altura ** 2)
  return imc
}
console.log(imc(80, 1.8))

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'

addEventListener('click', function() {
  console.log('oi')
})
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima