// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(function(item){
  item.classList.remove('ativo')
})
itensMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')
imgs.forEach(function(item){
  if (item.hasAttribute('alt')){
    console.log(`${item} Possui alt`)
  }else {
    console.log(`${item} Não possui alt`)
  }
})
// Modifique o href do link externo no menu
const link = document.querySelector('.menu [href^="https://"]')
link.setAttribute('href', 'https://www.youtube.com/')