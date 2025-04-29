var nome = 'Lucas';
console.log(typeof nome);
// retorna string

var nome = 'Lucas';
var sobrenome = 'Pereira';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto)

var gols = 1000
var frase = 'Cristiano está perto dos ' + gols + ' gols'
console.log(typeof frase)

var ano = 2026
var anos = 4
console.log(ano + anos)

//'JavaScript é "super" fácil';
//"JavaScript é 'super' fácil";
//"JavaScript é \"super\" fácil";
//`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

//Template String
var gols2 = 1000
var frase2 = `Messi nunca irá fazer ${gols2} gols`
console.log(frase2)