// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)

const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('.faq-lista')
const primeiroDt = dl.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')

faq.innerHTML = animais.innerHTML