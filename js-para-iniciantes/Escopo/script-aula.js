function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

if(true) {
  var carro = 'Fusca';
  console.log(carro); // Variáveis criadas com var, vazam o bloco.
}
console.log(carro); // Carro

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`); // var está vazando do bloco
}
console.log(i); // 10 // Se usasse-mos 'let' em vez de 'var' essa linha daria erro

const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 4,
  mes: 'maio',
  ano: 2026,
}

data.dia = 29; // Funciona
// data = 'Janeiro'; // erro
