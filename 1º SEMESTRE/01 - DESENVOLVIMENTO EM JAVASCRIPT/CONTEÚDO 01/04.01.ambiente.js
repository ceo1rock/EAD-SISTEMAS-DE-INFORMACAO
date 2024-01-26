//arrays 

meu_primeiro_array = [1, 2, 3, "texto", true, false, [1, 2, 3,[1,2,3]]] // ,(virgula) sempara os dados, 
console.log(meu_primeiro_array[3])
console.log(meu_primeiro_array[6][0])
console.log(meu_primeiro_array[6][2])
console.log(meu_primeiro_array[6][3][1])

console.log
// .lenght // É uma Propriedade do Array, para dizer quantos dados há no objeto, nesse caso são 7
console.log(meu_primeiro_array.length)

// .push() - Usado para inserir dados no array
meu_primeiro_array.push("novo")

console.log(meu_primeiro_array)

// .pop() - Usado para remover uma informação, adicionando em outra variável
dado_removido = meu_primeiro_array.pop()
console.log(meu_primeiro_array)

console.log(dado_removido)

// .indexOf() - Busca dentro do array
posicao = meu_primeiro_array.indexOf("texto")
console.log(posicao)

// .sort() - Cola os dados em posição alfanúmerica (1, 11, 12, 2, 3, 4, 40, 42, 44)
var novo_array = ["cavalo", "alface", "bola"]
console.log(novo_array)

novo_array.sort()
console.log(novo_array)

array_numeros = [ 55, 22 , 1, 11, 99, 33, 43, 51, 67, 173, 4, 2, 3]
array_numeros.sort()
console.log(array_numeros)

// .sort((a,b) => a-b) - Coloca os números em ordem númerica
array_numeros.sort((a,b) => a - b)
console.log(array_numeros)

// .slice()
// nova var irá receber uma cópia de parte do array, a partir de um subarray criado entre as posições "início" e "fim"(fim não é incluído) de um array original. O Array original não é modificado.
quatro_primeiros_elementos = array_numeros.slice(0,4) // posição final não entra
console.log(quatro_primeiros_elementos)

ultimo_elementos = array_numeros.slice(12) // posição final não entra
console.log(ultimo_elementos)

tres_elementos = array_numeros.slice(10,13) // posição final não entra
console.log(tres_elementos)

// Pode ser criado arrays vazios.
novo_array = []
console.log(novo_array)

// .shift() - Para apagar o primeiro elemento
array_numeros.shift()
console.log(array_numeros)

// unshift() - podemos adicionar elementos no começo
array_numeros.unshift(999)
console.log(array_numeros)


// .splice() - O método altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos, é preciso saber sua posição. Usar o método indexOf()

lista = ["a", "b", "c", "d", "e"] // lista com 5 elementos
indice_de_c = lista.indexOf("c")  // descobre o índice de "c"
console.log(indice_de_c)          // 2
console.log(lista[indice_de_c])   // confirmando que o item está certo (retorna c)
lista.splice(indice_de_c, 1)      // removendo apenas o elemento "c"
console.log(lista)                // [ 'a', 'b', 'd', 'e' ]

array_numeros = [ 55, 22 , 1, 11, 99, 33, 43, 51, 67, 173, 4, 2, 3]
remover = array_numeros.indexOf(99) // cria uma var para informar onde esta a posição do dado que será removido
console.log(array_numeros[remover]) // exibe o dado a ser removido
array_numeros.splice(remover,2)     // como para remover 
console.log(array_numeros)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// functions
function soma(a, b){
    let operacao = a+b 
}

// chamada da função
let resultado = soma(2, 2)
console.log(resultado)

const soma2 = (a,b) => a+b
console.log(soma2(2,2))

    "OBJETOS:"
        "Criando objetos:"
meu_primeiro_objeto = { "chave": "valor" }

objeto = {
    "chave1":1,
    "chave2":2,
    "chave3":3,
    "chave4":4
}

"Consultando uma chave"
// 1ª forma de acesso 
valor_chave_1 = objeto.chave1 
console.log("O valor da chave1 é", valor_chave_1)  // O valor da chave1 é 1
 
// 2ª forma de acesso
valor_chave_2 = objeto['chave2']
console.log("O valor da chave2 é", valor_chave_2) // O valor da chave1 é 2

cadastro_cliente = { 
    "nome": 'João',
    "telefone": 31912341234,
    "cidade": 'Ipatinga'
}
var nome = cadastro_cliente.nome
console.log(`O nome é ${nome} e da cidade ${cidade}`)

var telefone = cadastro_cliente.telefone
console.log(`O Telefone é ${telefone}`)

// Exemplo contendo objeto recebendo objeto e objeto recebendo array:
objeto = {
    "chave1":{ "camada1_1":5 },
    "chave2":['abacate', 'bola', 'cavalo']
}

valor_1 = objeto.chave1.camada1_1
console.log(valor_1)  //5

valor_2 = objeto.chave2[1]
console.log(valor_2)  // bola