// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function addClasse(e) {
  e.preventDefault()
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  e.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', addClasse)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')

function mostrarElemento(e) {
  console.log(e.currentTarget)
}

// todosElementos.forEach((e) => {
//   e.addEventListener('click', mostrarElemento)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removerElemento(e) {
  e.target.remove()
}

todosElementos.forEach((e) => {
  e.addEventListener('click', removerElemento)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentarTexto(e) {
  if (e.key === 't') {
    document.documentElement.classList.toggle('texto-maior')
  }
}

window.addEventListener('keydown', aumentarTexto)