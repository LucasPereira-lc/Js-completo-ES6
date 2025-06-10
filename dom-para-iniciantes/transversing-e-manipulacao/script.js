const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')
//h1.outerHTML = 'oii'
//console.log(animaisLista.innerText)

const lista = document.querySelector('.animais-lista')
console.log(lista.children[--lista.children.length]) // último filho
lista.querySelectorAll('li') // todas as li's
console.log(lista.querySelector('li:last-child')) // último filho

console.log(lista.childNodes) // lista de filhos node

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

// lista.appendChild(titulo)
// contato.insertBefore(animais, mapa)
// contato.removeChild(mapa) // remove o mapa do contato
contato.replaceChild(animais, titulo)