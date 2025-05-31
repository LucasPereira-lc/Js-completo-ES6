const img = document.querySelector('img')

function callback(event) {
  console.log(event)
}
img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(e) {
  console.log(e.currentTarget) 
  console.log(e.target)
  console.log(e.type)
  console.log(e.path)
}

animaisLista.addEventListener('click', callbackLista)