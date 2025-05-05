// window.alert('Isso mesmo')

const href = window.location.href
console.log(href)
if(href === 'http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/index.html') {
  console.log('É igual')
}

const h1selecionado = document.querySelector('h1')
h1selecionado.innerText = 'Mudei o Título'