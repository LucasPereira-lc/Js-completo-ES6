function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

const lucas = new Pessoa('Lucas', 18)

console.log(Pessoa.prototype)
console.log(lucas.prototype)