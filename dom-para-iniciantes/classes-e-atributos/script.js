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
console.log(animais.attributes.id)