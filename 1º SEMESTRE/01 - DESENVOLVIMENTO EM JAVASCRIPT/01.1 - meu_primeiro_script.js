// meu primeiro programa JS
window.alert("Ola! Tudo bem?")

mensagem = "Ola, mundo!";
alert(mensagem);

alert("Olá!!!")
console.log("Mensagem para o console")

/*
O comando alert exibirá uma caixa de diálogo com uma mensagem que continuará sendo exibida enquanto o usuário não clicar no botão OK.

Após declarar a variável, é possível chamá-la com o alert().
A variável armazena um texto, e chamamos isso de strings ou cadeias de caracteres. 
Variáveis podem armazenar outros tipos de dados, como números, arrays, objetos e muitos outros tipos.

Palavras reservadas para declarar variáveis:
var // escopo global
const // variável constante, que não pode ser alterada durante a execução do código
let // escopo local

Variáveis pode ser criadas, simplimente colocando o nome no inicio da linha e atribuindo um valor a ela.
*/

// Operadores aritméticos:
2 + 2 = 4
10 - 5 = 5
5 * 5 = 25
10 / 2 = 5
2 ** 3 = 8
5 / 2 =1

// Operadores de comparação:
2 + 2 > 5   // false
2 + 2 == 4  // true
*/
var x = 2
var y = 3
var z = '3'

// METODO/FUNÇÃO são colocadas entre parenteses, os comentários são impresso no console do navegador

console.log("x + y = ", x + y) // x + y  = 5
console.log("x - y = ", x - y) // x - y = -1
console.log("x * y = ", x * y) // x * y = 6
console.log("x / y = ", x / y) // x / y = 0.6667
console.log("x % 2 = ", x % 2) // x % 2 = 0
console.log("y % 2 = ", y $ 2) // y % 2 = 1

console.log(x + y + z) = 53 //soma os número e concatena com a string
console.log(typeof z) // string

console.log(mensagem)

"OPERADORES LÓGICOS:"
x = 1
y = 2
console.log( x == y) // false
console.log( x < y) // true

// AND &&
// condição 1 E condição 2 devem ser verdadeiras
console.log(( x < y ) && ( y % 2 == 0)) // true
console.log(( x < y ) && ( y % 2 == 1)) // false
console.log(( x > y ) && ( x > 0 ))     // false

// OR ||
// pelo menos uma conidção é verdadeira
console.log(( x < y ) || ( y % 2 == 1)) // true
console.log(( x > y ) || ( x > 0 ))     // true

// NOT !
console.log( !( x > y ) && ( x > 0 ))      // true 
console.log( !( x > y ) || ( !( x > 0)))   // false

ex.:
console.log ((x<y)&&(x%2==0)||(y%2==0)) // true
console.log ((x<y)&&(x%2==0)||(y%2==1)) // false