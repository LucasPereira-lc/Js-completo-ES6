// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

// function classeItem(e) {
//   e.preventDefault()
//   linksInternos.forEach((link) => {
//     link.classList.remove('ativo')
//   })
//   e.currentTarget.classList.add('ativo')
// }
// linksInternos.forEach((link) => {
//   link.addEventListener('click', classeItem)
// })

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *')

// function mostrar(e) {
//   console.log(e.currentTarget)
// }
// elementos.forEach((element) => {
//   element.addEventListener('click', mostrar)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// function remove(e) {
//   e.currentTarget.remove()
// }
// elementos.forEach((element) => {
//   element.addEventListener('click', remove)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentar(e) {
  if (e.key === 't') {
    document.documentElement.classList.toggle('texto-maior');
  }
}
window.addEventListener('keydown', aumentar)