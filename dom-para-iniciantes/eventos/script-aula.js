const img = document.querySelector('img')
function callback(event) {
  console.log(event)
}
//img.addEventListener('click', callback)


const animaisLista = document.querySelector('.animais-lista')
function callbackLista(e) {
  console.log(e.currentTarget) 
  console.log(e.target)
  console.log(e.type)
  console.log(e.path)
}
//animaisLista.addEventListener('click', callbackLista)


const linkExterno = document.querySelector('a[href^="http"]')
function prevent(e) {
  e.preventDefault()
  console.log(e)
  //console.log(this)
  //console.log(e.currentTarget)
  //console.log(this.getAttribute('href'))
}
//linkExterno.addEventListener('click', prevent)


const h1 = document.querySelector('h1');
function callback(event) {
  console.log(event.type, event);
}
/*
h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
h1.addEventListener('mousemove', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);  */


function handleKeyboard(e) {
  if (e.key === 'a') {
    document.body.classList.toggle('azul')
  }
}
//window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

function imgSrc(e) {
  console.log(e.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc)
})