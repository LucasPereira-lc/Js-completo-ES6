function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

Pessoa.prototype.andar = function() {
  return this.nome + ' andou'
}

const lucas = new Pessoa('Lucas', 18)

console.log(Pessoa.prototype)
console.log(lucas.prototype)

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
// andre.andar();
// andre.__proto__.andar();
