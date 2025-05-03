var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var idade = 19
naoPossuiDiabetes = false
var beber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber'
console.log(beber)
/* 
If Abreviado
Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código */

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade'); 