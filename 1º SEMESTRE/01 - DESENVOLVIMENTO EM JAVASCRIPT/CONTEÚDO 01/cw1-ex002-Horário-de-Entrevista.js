var inico = 9
var final = 17
var tempoEntrevista = 15
var quantEntrevistados = 0
var listaEntrevistado = [
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
listaEntrevistado.sort()
console.log(listaEntrevistado)

for( i = inico; i < final; i++){
    if(i==12||i==13){
        continue;
    }
        for(j=0;j<60;j=j+tempoEntrevista){
            if(j==0){
                console.log("Entrevista #"+quantEntrevistados+" - ",i,":",j,"0 - "+listaEntrevistado[quantEntrevistados ])
            }else{
                console.log("Entrevista #"+quantEntrevistados+" - "+ i+":"+j+" - "+listaEntrevistado[quantEntrevistados ])
            }   
            quantEntrevistados++
        }
    }

console.log("************************************************************************************")
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
for(hora; hora < saida; hora++){
    if((hora == 12)||(hora==13)){
        continue
    }
    for(min = 0; min < 60; min = min+minutos){
        total_entrevistas++; 
        if(min == 0){
            console.log(hora+":"+min+"0","- Entrevista de", entrevistados[total_entrevistas]) 
        }
        else{
            console.log(hora,":",min," - Entrevista de", entrevistados[total_entrevistas])
    }
}
}