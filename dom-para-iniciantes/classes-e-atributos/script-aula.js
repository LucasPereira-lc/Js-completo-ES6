const menu = document.querySelector('.menu')

menu.classList.add('ativo') // adiciona a classe 
menu.classList.remove('azul') // remove a classe
menu.classList.toggle('azul') // adiciona/remove a classe

if (menu.classList.contains('azul')) { 
  menu.classList.add('possui-azul')
}else {
  menu.classList.add('nao-possui-azul')

}

// console.log(menu.classList)

const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')

console.log(img.getAttribute('alt')) // valor do src
console.log(img.setAttribute('alt', 'Texto Alternativo')) // muda o alt
console.log(img.hasAttribute('alt')) // true / false
console.log(img.removeAttribute('alt')) // remove o alt

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}`)
  }
}