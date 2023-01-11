// Primeira questão
// Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira: “ultimoSobrenome, primeiroNome”;
var clientes = [
  {
    'id': 1,
    'nome': 'Luis Santos Silveira',
    'idade': 18,
  },
  {
    'id': 2,
    'nome': 'Ricardo Lopes Alves',
    'idade': 30
  },
  {
    'id': 3,
    'nome': 'Gustavo Silva Junior',
    'idade': 26
  }
]

clientes.forEach(element => {
  var nome = element.nome.split(' ');
  var primeiroNome = nome[0]
  var ultimoSobrenome = nome[nome.length - 1]
  console.log(ultimoSobrenome, primeiroNome)
});


// Segunda questão
// Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”
var data = '5(1)9 - 876 - 543 - 21'
var mask = "(XX)_X_XXXX-XXXX".split('');

var numbers = data.split('')
const newNumbers = [] 
numbers.forEach(e => {
  if (!isNaN(e) && e != ' ') {
    newNumbers.push(e)
  }
});

var numberIndex = 0;
var result = mask.forEach((character, index) => {
  if (character === 'X') {
    mask[index] = newNumbers[numberIndex];
    numberIndex++;
  }
})

var n = mask.join('')

console.log(n)

// Qual a ordem dos prints no console?
// C, D

// Existe algum erro nesse código? Se sim, comente sobre?
// Na função b, o retorno está antes do corpo da função. E na função D, a promise nunca resolveu e então a função a fica presa; 
