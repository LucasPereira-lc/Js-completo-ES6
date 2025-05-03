var videoGames = ['Switch', 'PS4', 'Xbox', 'Nintendo']
videoGames[0] // 'Switch'
videoGames[2] // 'Xbox'

// videoGames.pop() // Remove o último item e retorna ele
// videoGames.push('Nintendo') // Adiciona ao final da array
videoGames.length // 3

for (var n = 10; n >= 1; n--) {
  console.log(n)
}

var i = 1
while (i <= 5) {
  console.log(i)
  i++
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
  // if (videoGames[item] === 'Xbox'){
  //   break      // Faz parar o loop
  // }
} 

var frutas = ['Banana', 'Pera', 'Melancia', 'Goiaba', 'Uva']
frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array)
})