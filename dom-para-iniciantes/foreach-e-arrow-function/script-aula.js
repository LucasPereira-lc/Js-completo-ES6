/* const imgs = document.querySelectorAll('img')

let i = 0
imgs.forEach(function(item, index, array){ // sempre assim: 1¨ o item, 2¨ o index e 3¨ o array
  console.log(item, index, array)
}) */

// const titulos = document.getElementsByClassName('titulo')
// const titulosArray = Array.from(titulos)

/* titulosArray.forEach(function(item){
   console.log(item)
}) */

const imgs = document.querySelectorAll('img')
/*

imgs.forEach(item => { 
  console.log(item)
}) */

let i = 0
imgs.forEach((item) => console.log(i++))