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

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

const lista = document.querySelectorAll('li')
// Transforma em uma array
const arrayLista = Array.prototype.slice.call(lista)

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String