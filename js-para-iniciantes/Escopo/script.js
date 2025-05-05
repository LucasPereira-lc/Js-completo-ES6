// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(var, marca, portas); // pq const e let não funcionam fora do bloo  // 'var' nãp é o nome de uma variável

// Como corrigir o erro abaixo?
const dois = 2;  // colocar a variável fora dos dois blocos
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50; // Transformar 'var' em 'const', pq é melhor e essa variável não ira mudar o valor

for(let numero = 0; numero < 10; numero++) {
  console.log(numero); // Usar 'let' em vez de 'var', pois let não vaza do bloco
}

const total = 10 * numero;
console.log(total);
