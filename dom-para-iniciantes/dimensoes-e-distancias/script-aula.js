const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.clientHeight
const distanciatop = listaAnimais.offsetTop
console.log(distanciatop)

const primeiroh2 = document.querySelector('h2')
h2left = primeiroh2.offsetLeft

const rect = primeiroh2.getBoundingClientRect()
console.log(rect)
console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço
window.pageYOffset, // distância total do scroll vertical
window.pageXOffset // distância total do scroll horizontal
)

if(rect.top < 0) {
  console.log('Passou do elemento')
}

const small = window.matchMedia('(max-width: 600px)').matches
if (small) {
  console.log('Tela menor que 600px')
}else {
  console.log('Tela maior que 600px')
}