// Crie uma array com os anos que o Brasil ganhou a copa
// 1958, 1962, 1970, 1994, 2002
var brasilWin = [1958, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var ano = 0; ano < brasilWin.length; ano++) {
  console.log(`O brasil ganhou a copa de ${brasilWin[ano]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var f = 0; f < frutas.length; f++) {
  console.log(frutas[f])
  if (frutas[f] === 'Pera') {
    break
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]