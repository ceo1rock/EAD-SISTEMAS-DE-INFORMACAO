var hora = 9
var minutos = 15
var total_entrevistas = 0
const saida = 17
entrevistados = [
    "José da Silva",
    "Antônio de Sá",
    "Felipe Augusto",
    "Carla Moreira",
    "Pedro Malta",
    "Maria Sousa",
    "Marta da Silva",
    "Fausto Augusto",
    "Silvio Sávio",
    "Maísa Silva",
    "Lucas Lopes",
    "Zenildo Santos",
    "Bruno Lucas",
    "Luana Melo",
    "Felipe Santos",
    "Flávio Miguel",
    "Lauro Maria",
    "Juca dos Santos",
    "Luciana Carla",
    "Felipe Silva",
    "André Manuel",
    "Pedro Parker",
    "Ana Maria",
    "Thiago Melo"
]
entrevistados.sort()
console.log(entrevistados)

for(hora; hora < saida; hora++){
    if((hora == 12)||(hora==13)){
        continue
    }
    for(min = 0; min < 60; min = min+minutos){
        total_entrevistas++; 
        if(min == 0){
            console.log(hora+":"+min+"0","- Entrevista de", entrevistados[total_entrevistas]) // sinal de +(concatenção) não deixa espaço
        }
        else{
            console.log(hora,":",min," - Entrevista de", entrevistados[total_entrevistas]) // virgula gera um espaço
        }
    }
}