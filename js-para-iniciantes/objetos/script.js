var pessoa = {
  nome: 'Lucas',
  idade: 18,
  profissao: 'Programador',
  possuiFaculdade: false,
}
console.log(pessoa.profissao)

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lado) {
    return this.lados * lado
  },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
