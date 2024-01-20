if(true){
    console.log("Olá mundo!");
}
if(false){
    console.log("Esta mensagem não será executada");
}



// CONDIÇÕES SIMPLES:
x = 1
if (x % 2 == 0) {
    console.log(x, "é um número par")
} // Não irá aparecer nada no console, pois X é par. O bloco só executa condição verdadeira
    
x = 1;
// se x for um número ímpar
if(x % 2 == 1){
    console.log("A variável x é um número ímpar");
} // O console irá exibir a mensagem.
    
x = 5
y = 3
if((x < y)||(x % 2 == 1)){
    console.log("x é maior do que y OU x é um número ímpar")
} // Resposta: Irá exibir a mensagem no log, pois x é impar
    
var x = 1
var y = '1'
if (x == y){
    console.log("iguais") // retorna "iguais" no console
    console.log(x+y)      // retorna 11 no console
} 
    
var x = 1
var y = '1'
if (x === y){             // igual e do mesmo tipo
    console.log("iguais") // Não retorna nada no console
    console.log(x+y)      // Não retorna nada no console
} 

console.log('________________________________________________')

idade = 13

if(idade >= 4 && idade < 6){
    console.log("Pré-escola");
}
else if(idade >= 6 && idade < 15){
    console.log("Ensino fundamental");
}
else if(idade >= 15 && idade < 18){
    console.log("Ensino médio");
}
else{
    console.log("Aluno está fora do padrão escolar.")
}
console.log("FIM")

console.log('________________________________________________')

// determina aprovados para a segunda etapa
function primeiraEtapa(acertos_na_prova, 
    semestres_cursados){
/*   
* Help: 
* acertos_na_prova recebe a quantidade de acertos na prova
* semestres_cursados: semestres cursados
*/
// regras para aprovação
const total_de_questoes = 20 
const nota_minima_aprovacao = 0.7 
const minimo_semestres = 3

// calcula a nota %
let nota = acertos_na_prova / total_de_questoes

// calcula se vai ser aprovado ou não
if((nota >= nota_minima_aprovacao) && (semestres_cursados >= minimo_semestres)){
return "Aprovado";
}
else if(nota>= nota_minima_aprovacao) { // NÃO PRECISA REPERTIR A REGRAS DO SEMPRES, PELA LÓGICA DO CÓDIGO
return "Você foi incluído em nosso banco de currículos";
}else{
return "Reprovado"
}
}
console.log(primeiraEtapa(10,5))