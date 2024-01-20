

for(i = 0; i < 5; i++){
    if(i == 2){   // se i é igual a 2
      continue;   // encerre a iteração atual 
    }
    console.log(i);
  }

  for(i = 10; i > 5; i = i-1){ // PARA a var i, iniciando em 0, ENQUANTO ela for menor do que 5, execute o bloco { } SOMANDO 1 a cada rodada.
    console.log(i);
}


for(i = 10; i > 5; i+3){ 
  console.log(i);

  if ( i == 100){
    break
  }
}