var nome = 'Lucas'
console.log(nome.length) // 5
console.log(nome.charAt(0)) // L
console.log(nome.replace('s', 'relli')) // Lucarelli
console.log(nome) // Lucas

var numero = 1.8
console.log(numero.toString())
console.log(numero.toFixed())
/* Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos */

function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado.toString())
/* function areaQuadrado(lado) {
  return lado * lado
  } */
console.log(areaQuadrado.length) // mostra quantos parâmetros a função tem - 1

var btn = document.querySelector('.btn')
btn.classList.add('azul') // Adiciona a classe azul
console.log(btn.classList) // Mostra as classes da var/item
console.log(btn.innerText) // Mostra o texto da var
btn.addEventListener('click', function() {
  console.log('clicou!')
})

/* Objetos revolucionaram a programação
Web API's são métodos e propriedades que permitem a interação JavaScript e Browser. */