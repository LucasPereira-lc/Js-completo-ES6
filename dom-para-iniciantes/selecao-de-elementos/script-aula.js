const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

const primeiraLi = document.querySelector('li')
console.log(primeiraLi) // retorna a primeira li do código

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl) // retorna a primeira ul do código

const linkInterno = document.querySelector('[href^="#"')
console.log(linkInterno) // retorna o primeiro link interno do código

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[2])

//const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

//titulo.classList.add('grid-section');

console.log(gridSectionNode); // 3 itens
console.log(gridSectionHTML); // 4 itens

gridSectionNode.forEach(function(item, index){
  console.log(index)
})

const arrayGrid = Array.from(gridSectionHTML)
// arrayGrid.pop() remove o último item da array e retorna ele