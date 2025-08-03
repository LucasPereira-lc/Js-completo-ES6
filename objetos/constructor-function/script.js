// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.andar = function() {
    console.log(nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  this.elements = function() {
    return document.querySelectorAll(seletor)
  }
  this.adicionar = function(classe) {
    this.elements().forEach((element) => {
      element.classList.add(classe)
    })
  }
  this.remover = function(classe) {
    this.elements().forEach((element) => {
      element.classList.remove(classe)
    })
  }
}

const ul = new Dom('ul')
const ListaItens = new Dom('li')