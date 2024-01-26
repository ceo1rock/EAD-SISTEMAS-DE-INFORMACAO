var hora = 9
var minutos = 15
var total_entrevistas = 0
const saida = 17
entrevistado = [
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
for(hora; hora < saida; hora++){
    if((hora == 12)||(hora==13)){
        continue
    }
    for(j = 0; j < 60; j = j+minutos){
        total_entrevistas++;
        entrevistado++;      
        if(j == 0){
            console.log(`Entrevista # ${total_entrevistas} => ${hora} : ${j}0`)
        }
        else{
            console.log(`Entrevista # ${total_entrevistas} => ${hora} : ${j}`)
        }
    }
}