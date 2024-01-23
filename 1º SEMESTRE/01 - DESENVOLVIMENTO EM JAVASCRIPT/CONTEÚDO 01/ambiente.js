for(i = 0; i < 5; i++){
    if(i == 2){   // se i é igual a 2
      continue;   // encerre a iteração atual 
    }
    console.log(i);
  }

  for(i = 10; i > 5; i = i-1){ // PARA a var i, iniciando em 0, ENQUANTO ela for menor do que 5, execute o bloco { } SOMANDO 1 a cada rodada.
    console.log(i);
}
//_______________________________________________________________


for(i = 10; i > 5; i = i+3){ 
  console.log(i);

  if ( i == 100){
    break // condição de parada, para evitar loop infinito
  }
}
//_______________________________________________________________

var i = 0
while( i < 5 ) {
  console.log(i)
  i++
}

//_______________________________________________________________
var i = 0
do {
console.log(i)
  i++
}while ( i < 5 )

//_______________________________________________________________
var i = 0

for ( i = 0 ; i<5; i++){
  console.log("for: ", i)
}
while( i < 5 ) {
  console.log("while: ", i)
  i++
}
// o console só irá executar o for, pois no final do for i passa a valer 5, e quando executar o while, já estará na condição de parada. Se tivesse usado a let dentro do for, por ter escopo local, o while receberia o valor var = 0

//_______________________________________________________________
for ( i = 0 ; i<5; i++){
  console.log("for: ", i)
}

var i = 0
while( i < 5 ) {
  console.log("while: ", i)
  i++
}

console.log(0.5 - 0.4 == 0.1)


var i = 0
do {
  console.log("do: ", i)
  i++

} while (i<5)

lista_numeros = [1, 2, 3, 4]
for ( i of lista_numeros){
  console.log(i)
}

lista_numeros = [1, 2, 3, 4] // retorna a posição
for ( i in lista_numeros){ 
  console.log(i)
}