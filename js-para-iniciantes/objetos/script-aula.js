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

/* var menu = {
  width: 800,
  height: 100,
  backgroundColor: '#84E',
}
menu.color = 'Blue'
menu.backgroundColor = '#000'
var bg = menu.backgroundColor */

var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2 // 25
  },
}

menu.hasOwnProperty('color') // false
menu.hasOwnProperty('width') // true
'Lucas'.length // 5