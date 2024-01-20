var hora = 9
var minutos = 15
var total_entrevistas = 0
const saida = 17
for(hora; hora < saida; hora++){
    if((hora == 12)||(hora==13)){
        continue
    }
    for(j = 0; j < 60; j = j+minutos){
        total_entrevistas++;      
        if(j == 0){
            console.log(`Entrevista # ${total_entrevistas} => ${hora} : ${j}0`)
        }
        else{
            console.log(`Entrevista # ${total_entrevistas} => ${hora} : ${j}`)
        }
    }
}
/* Declarar as variavíes:
hora para inicio
minutos para o tempo da entrevista mais a pausa
hora da saída
contador para entrevistas.

for para às "horas" de inicio 9 até as 17, com um if tendo como regra se hora for igual a 12 ou 13, continue.

for para os minutos, sendo que inicia em 0, com limite de 60, com 15min de incremento/passo.

Dentro do segundo laço, incrementamos o contador de entrevistas e,
Imprimimos os horário de entrevista.
 
Fazer um comando condicional para verificar se os minutos seriam iguais a 0, pois queríamos que fossem impressos dois valores “00”. 
*/