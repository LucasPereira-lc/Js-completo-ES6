const imgs = document.querySelectorAll('img')

let i = 0
imgs.forEach(function(item, index, array){ // sempre assim: 1¨ o item, 2¨ o index e 3¨ o array
  console.log(item, index, array)
})