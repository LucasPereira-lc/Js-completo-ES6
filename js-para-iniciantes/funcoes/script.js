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

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(60, 1.80); // retorna o imc
console.log(imc(40, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!'
  }
  else if (idade >= 60) {
    return true
  }else {
    return false
  }
}
console.log(terceiraIdade('oi'))

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

imc(80, 1.80); // imc aparece no console
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

