const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')
//h1.outerHTML = 'oii'
//console.log(animaisLista.innerText)

const lista = document.querySelector('.animais-lista')
console.log(lista.children[--lista.children.length]) // último filho
lista.querySelectorAll('li') // todas as li's
console.log(lista.querySelector('li:last-child')) // último filho

console.log(lista.childNodes)