Aula 2 - APIs de navegador – manipulando áudio e gráfico
49 minutos
Aula 2
APIS DE NAVEGADOR – MANIPULANDO ÁUDIO E GRÁFICO
Nesta aula, você aprenderá um pouco mais sobre e a construção de desenhos básicos e animações usando JavaScript.

49 minutos


INTRODUÇÃO
Olá, estudante!
Ao adentrar no mercado de trabalho como desenvolvedor web, você poderá se deparar com momentos em que será necessário renderizar componentes gráficos em suas páginas. Em HTML, um dos componentes que permitem a inserção de gráficos é a tag <canvas>.
Elementos <canvas> podem ser, por exemplo, renderizados por JavaScript; para isso, JavaScript utiliza a biblioteca WebGL (Web Graphics Library) para renderizar gráficos bidimensionais (2D) ou tridimensionais (3D) diretamente em um navegador web.
Nesta aula, você aprenderá um pouco mais sobre e a construção de desenhos básicos e animações usando JavaScript.
Bons estudos!

INTRODUÇÃO AO CANVAS
O é um elemento HTML usado para renderização de gráficos, ou seja, para a construção de desenhos, em especial, realizados por linguagens como JavaScrip. O canvas pode ser usado, por exemplo, para construção de jogos em HTML5.
Observe o código a seguir:

Código 1 | Código canvas
<canvas width="400" height="400"></canvas>
Fonte: elaborado pelo autor.
Esse código declara um elemento HTML do tipo Canvas, e podemos imaginar o Canvas como uma área reservada para inserção de algum desenho. Nesse exemplo, nossa área tem tamanho de 400px de altura por 400px de largura. 
Vamos, então, ver um exemplo básico de , no entanto, vamos começar com arquivo HTML. O Canvas deve estar declarado dentro da tag , e note que aplicamos um id para nossa tag, que passou a ser denominada “desenho”, tendo 400x400px de tamanho.

index.html
<!DOCTYPE html>
<html>
<head>
  <title>DOM</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="estilo.css"> 
</head>
<body>  
  <canvas id="desenho" width="400" height="400"></canvas>
  <script src="script.js"></script>
</body>
</html>
Ao abrir esse código em seu navegador, você não verá nada além de uma tela em branco. Vamos criar um arquivo CSS para inserir margens ao redor da área de desenho do e, na sequência, observe a Figura 1.

estilo.css
canvas{
    border: 1px grey solid;
}
Figura 1 | Canvas vazio. Bordas inseridas por CSS

Fonte: captura de tela elaborada pelo autor.
Ao carregar a página, é possível ver que uma leve linha acinzentada contorna a região ao redor da área de desenho. Agora, podemos fazer desenhos na tela, e para manipular o Canvas, é necessário utilizar JavaScript. Além disso, note que a declaração do script externo é feita no fim do arquivo, imediatamente antes da tag . 
Vamos, então, construir nosso script que fará um desenho dentro da área delimitada pelo Canvas e que renderizará um simples quadrado de 100px de altura por 100px de largura. Observe o código a seguir e a Figura 2:

script.js
// seleciona o elemento do canvas
var canvas = document.getElementById('desenho');
 
// variável de contexto 2d
var ctx = canvas.getContext('2d');
 
// desenha um retângulo
ctx.fillRect(20, 20, 100, 100)
Figura 2 | Quadrado inserido no Canvas

Fonte: captura de tela elaborada pelo autor.
Perceba que nosso quadrado negro foi inserido no canto esquerdo da área de desenho do Canvas, agora, vamos entender parte por parte do código.
Observe a linha a seguir:

var canvas = document.getElementById('desenho');
Nela, é feita a declaração de uma variável chamada canvas, e essa variável recebe o resultado de uma consulta ao DOM, que seleciona o elemento id “desenho”. A seguir, declararemos uma variável chamada ctx:

var ctx = canvas.getContext('2d');
Antes de iniciar a renderização, o script precisa obter o contexto de renderização; para isso, é utilizado o método getContext(), que deve receber o tipo de gráfico que se deseja produzir. No exemplo a seguir, apresentaremos um gráfico de duas dimensões, logo, marcamos “2d”.
Seguindo esse contexto, podemos, então, fazer o primeiro desenho (um retângulo) utilizando o método fillRect( ), que receberá quatro parâmetros:

ctx.fillRect(
distância para o eixo x,
distância para o eixo y,
	largura,
altura
)
Nesse caso, vemos que a distância para o eixo x e y é de 20px, enquanto a largura e altura do quadrado é de 100px.

ctx.fillRect(20, 20, 100, 100)
Note que não especificamos a cor do quadrado, logo, ele foi desenhado em preto. No próximo bloco, você verá com mais detalhes como desenhar outras formas, aplicar estilos e alterar as cores. Até lá!

VIDEOAULA: INTRODUÇÃO AO CANVAS
Nesta aula, você aprenderá o que são elementos , bem como inicializá-los e criar formas básicas. 
Bons estudos!

Videoaula: Introdução ao Canvas

 


DESENHANDO FORMAS, APLICANDO ESTILO E CORES
No bloco anterior, você viu os fundamentos do Canvas; nesta aula, você vai aprender a aplicar estilos e a desenhar novas formas geométricas. 
Vamos começar adicionando um segundo quadrado, próximo ao primeiro:

// seleciona o elemento do canvas
var canvas = document.getElementById('desenho');
 
// variável de contexto 2d
var ctx = canvas.getContext('2d');
 
// desenha um retângulo
ctx.fillRect(20, 20, 100, 100)
 
// segundo retângulo
ctx.fillRect(30, 30, 100, 100)
Figura 3 | Sobreposição de quadrados no Canvas

Fonte: elaborada pelo autor.
Para diferenciar os dois quadrados, é possível aplicar cores distintas usando a propriedade fillStyle. Para selecionar uma cor, é possível aplicar a função rgb entre aspas, que recebe três valores, que vão de 0 a 255, correspondentes às cores vermelho (r: red), verde (g: green) e azul (b: blue).

// desenha um retângulo
ctx.fillStyle = "rgb(180,0,0)";
ctx.fillRect(20, 20, 100, 100)
 
// segundo retângulo
ctx.fillStyle = "rgba(0,0,180,0.7)";
ctx.fillRect(30, 30, 100, 100)
Figura 4 | Aplicando cores. O primeiro quadrado recebe um tom de vermelho e o segundo um tom de azul (com opacidade de 70%)

Fonte: elaborada pelo autor.
Note que, no segundo quadrado, substituímos a função rgb por rgba, que insere uma quarta camada correspondente ao padrão alpha (ou índice de opacidade/transparência). O valor de 0.7 indica que queremos 70% de opacidade (ou 30% de transparência).

Desenhando um círculo
O JavaScript possui uma série de métodos que facilitam o desenho em Canvas. Por exemplo: podemos usar as propriedades de path (caminhos) para a construção de um círculo. Observe o código a seguir:

// seleciona o elemento do canvas e cria contexto
var ctx=document.getElementById('desenho').getContext('2d');
 
// inicia um novo path
ctx.beginPath();
 
// configurações
var x = 100;
var y = 100;
var raio = 50;
var angulo_inicio = 0; 
var angulo_fim = Math.PI * 2;
 
// desenha um arco
ctx.arc(x, y, raio, angulo_inicio, angulo_fim);
 
// desenha as linhas
ctx.stroke();
Inicialmente, instanciamos o path com o método beginPath(), e note que optamos por separar os valores de entrada necessários em variáveis cujos nomes são autoexplicativos. Uma variável digna de nota é a “angulo_fim”, que determina o valor do ângulo final (lembre-se de que a circunferência é dada por 2πr, por isso, devemos usar o método Math.PI para receber o valor de π e calcular o círculo perfeito). E para que o nosso círculo fique completo, vamos utilizar o método arc( ), que recebe como entrada: margem à esquerda (x); margem para o topo (y); raio do círculo; ângulo inicial; e ângulo final. Por fim, o método stroke( ) será usado para desenhar as linhas. 
Este é o resultado final (vide Figura 5):

Figura 5 | Criando um círculo

Fonte: elaborada pelo autor.
Desenhando texto
Pode parecer estranho, mas, em alguns casos, pode ser necessário “desenhar” blocos de texto em elementos <canvas>. Podemos fazer isso usando o método filltext().

var ctx=document.getElementById('desenho').getContext('2d');
 
// configurações
var x = 20;
var y = 100;
 
// tamanho da fonte e tipo
ctx.font = '72px serif';
 
// inserindo o texto
ctx.fillText("Olá mundo!", x, y);
Figura 6 | Inserindo texto no Canvas

Fonte: elaborada pelo autor.
Salvando como imagens
Você pode salvar qualquer imagem clicando com o botão direito sobre a área do Canvas (conforme Figura 7) e, depois, em “salvar imagem como...”.

Figura 7 | Por padrão, Canvas salva imagens como PNG

Fonte: elaborada pelo autor.
Infelizmente, Canvas não salva as imagens em formato vetorial, o que gera uma grande perda de qualidade.

VIDEOAULA: DESENHANDO FORMAS, APLICANDO ESTILO E CORES
Nesta aula, você aprenderá a realizar desenhos básicos de formas geométricas usando <canvas>. 
Bons estudos!

Videoaula: Desenhando formas, aplicando estilo e cores

 


APLICANDO ANIMAÇÃO E ÁUDIO
Podemos, ainda, fazer animações usando Canvas e JS. Vamos começar com um exemplo simples: uma barra de progresso. Observe o código a seguir:

// iniciando o canvas
var canvas = document.getElementById('desenho')
var ctx = canvas.getContext('2d');
 
// configurações
var x = 0;
var y = 0;
var altura = 50;
var largura = 0;
Aqui, declaramos um novo desenho 2D usando canvas. Nas configurações, delimitamos a posição x e y (ambas 0), além da altura e largura da barra 50px e 0, respectivamente. 
Para construir uma animação, é preciso criar uma função que desenhe os objetos na tela e, a seguir, chamar essa função repetidamente a cada período de tempo. Veja:

function animacao(){
   ctx.fillRect(x, y, largura++, altura)
}
 
setInterval(animacao, 100)
Esse código irá produzir a seguinte animação:

Figura 8 | Animação com Canvas: barra de progresso
Início	Após 10 segundos	Após 30 segundos



Fonte: elaborada pelo autor.
No código acima, criamos a função “animacao” cujo único comando é desenhar um novo retângulo na tela. Esse retângulo começa da posição x e y (ambas equivalentes a 0), e altura inicial é de 50px, que é mantida durante toda execução. O segredo da animação está no terceiro argumento passado à função fillRect: largura++. Esse comando pega o valor atual de largura e o incrementa em 1 a cada chamada da função animacao( ), ou seja, se, na primeira chamada, ele equivale a 0, na segunda, ele vale 1, na terceira, recebe o valor 2, depois 3, 4, 5 e assim sucessivamente. 
As chamadas recursivas são feitas no comando:

setInterval(animacao, 100)
A função setInterval recebe como entrada outra função que será executada indefinidamente por períodos de tempo explicitados no segundo argumento (em milissegundos). No exemplo, usamos 100 milissegundos, o que indica que, a cada segundo, a barra cresce 10px.

Movendo objetos
No exemplo anterior, usamos o script para aumentar o tamanho da barra, no entanto, se, em vez de aumentar o tamanho da forma geométrica, quiséssemos movê-la pela tela, isso seria possível utilizando um truque simples: a cada rodada de interação, precisaríamos apagar a forma geométrica previamente criada. Podemos fazer isso com o comando clearRect( ), que recebe quatro parâmetros: x, y, largura e altura, e esses dois últimos correspondem às medidas do elemento HTML .
Neste caso, vamos começar aumentando as medidas do nosso retângulo:

// iniciando o canvas
var canvas = document.getElementById('desenho')
var ctx = canvas.getContext('2d');
 
// configurações
var x = 0;
var y = 0;
var altura = 100;
var largura = 100;
Agora, vamos implementar a função mova( ), e é importante que o nome das nossas funções represente o que elas realmente fazem.

function animacao(){
   // apagando o retangulo
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   
   // desenhando um novo retangulo
   ctx.fillRect(x++, y, largura, altura)
}
setInterval(animacao, 100)
Observe, na Figura 9, o que acontece se executarmos o código:

Figura 9 | Animação usando Canvas: movendo um quadrado
Início	Após 10 segundos	Após 30 segundos



Fonte: elaborada pelo autor.
Observe como pegamos a largura e a altura <canvas> do na função clearRect( ): usando canvas. width e canvas.height, respectivamente. Na função fillRect( ), alteramos o posicionamento do elemento usando x++, ou seja, ele se movimentou apenas no eixo x. Se quisermos mover o objeto em outros sentidos, basta alterarmos a variável que incrementamos:

Figura 10 | Movendo itens nos eixos x e y
x, y++
(após 10 segundos)	X++, y++
(após 10 segundos)


Fonte: elaborada pelo autor.
Caso deseje acelerar a velocidade da animação, reduza o valor do segundo argumento enviado para setInterval() ou, caso deseje reduzir a velocidade, aumente esse valor.

Manipulando áudio
Apesar do Canvas não fornecer uma API para manipulação direta de áudio, ele permite que você faça manipulações de áudios usando JavaScript e a tag <audio>, por meio dos objetos HTMLAudioElement (FULTON; FULTON, 2011). 
Vamos começar declarando um arquivo de áudio no HTML. Primeiro, precisamos de um arquivo de áudio, logo, para o exemplo, utilizaremos um pequeno arquivo com, aproximadamente, 2 segundos de duração, chamado “som.mp3”, e o colocaremos no mesmo diretório que o arquivo “index.html” e “script.js”. Agora, temos que fazer algumas pequenas alterações no arquivo HTML:

index.html
<!DOCTYPE html>
<html>
<head>
    <title>Canvas & Audio</title>
    <meta charset="utf-8">
</head>
 
<body>
    <!-- MUSICA -->
    <audio id="musica" controls autoplay>
        <source src="som.mp3" type="audio/mp3">
    </audio>  
 
    <!-- Onde exibiremos dados da música -->
    <canvas id="detalhes"></canvas >
    
    <!-- script -->
    <script src="script.js"></script>
 
</body>
</html>
O HTML5 permite que você inclua um arquivo de áudio usando a tag <audio>, e, ao abrir esse arquivo, seu navegador, provavelmente, lhe mostrará um player interativo de áudio similar a este:

Figura 11 | Tag de áudio

Fonte: elaborada pelo autor.
Note que alteramos o id do canvas para “detalhes”. Nesse exemplo simples, vamos apenas ler o arquivo MP3 com o Canvas e extrair algumas propriedades básicas, como a duração da música. 
No “script.js”, inclua o seguinte código:

script.js
// inicia o canvas
var canvas = document.getElementById("detalhes");
var ctx = canvas.getContext("2d");
 
// coleta o elemento do audio
var musica = document.getElementById("musica");
 
// exibe a duração da música
ctx.fillText("Duração:"+musica.duration+" segundos.", 10, 10);
Figura 12 | Exibindo dados de uma tag <audio> usando Canvas

Fonte: elaborada pelo autor.
Nesse exemplo, a propriedade duration armazena o tempo em segundos da música, e podemos, ainda, manipular outras propriedades, como: currentTime (posição atual), loop (modo repetição), autoplay (analisa se o arquivo está iniciando automaticamente quando carregado), muted (muta o áudio), controls (mostra controles), volume (deve estar entre 0 e 1), paused (pausa a música), ended (verifica se o áudio tocou por completo), currentSrc (indica o endereço do arquivo de áudio), entre outros (FULTON; FULTON, 2011).

VIDEOAULA: APLICANDO ANIMAÇÃO E ÁUDIO
Nesta aula, você verá alguns exemplos de como implementar animações básicas usando Canvas e JavaScript. 
Bons estudos!

Videoaula: Aplicando animação e áudio

 


ESTUDO DE CASO
A equipe de desenvolvimento da Empresa A está muito satisfeita com o trabalho que você tem realizado como desenvolvedor front-end, por isso, decidiram passar um novo desafio para que resolva.
O time de marketing responsável pela gestão da marca da Empresa B percebeu que a maior parte dos websites dos concorrentes apresentava um recurso interessante: uma barra de progresso que surgia no topo da tela enquanto os itens eram carregados na tela. Por isso, decidiram pedir ao time de desenvolvimento que implementasse o mesmo recurso.
Nessa tarefa, você irá trabalhar em colaboração com um outro desenvolvedor do time. Sua função será a de cuidar dos aspectos visuais desse efeito, enquanto o outro desenvolvedor deverá cuidar da parte funcional da barra de tarefas. Vocês combinaram que o efeito deve ter uma taxa de atualização a cada 10 milissegundos, entretanto, a velocidade será definida por uma variável fator que será calculada pelo script que será desenvolvido por outro desenvolvedor. Não se preocupe com como esse valor será calculado; para testes, defina o valor de fator = 50 e realize testes para a resolução de 1280px de largura. 
Além disso, a equipe de design também pediu que a barra de carregamento tenha a cor "#4169E1" (um tom de azul), por isso, usando seu editor de códigos, construa um arquivo JavaScript que carregue a interface de uma barra de carregamento usando <canvas> e utilize, como base, os arquivos HTML e CSS a seguir:
Código fonte do HTML:

<!doctype html>
<html>
<head>
  <title>ModaS.A. | Moda a Seu Alcance</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
 
  <!-- para telas com resolução de até 1280px -->
  <canvas id="carregamento" 
              height="10" width="1280"></canvas>
 
  <!-- [...] -->
 
  <script src="script.js"></script>
</body>
</html>
Código fonte do CSS:

*{ margin: 0; padding: 0; }
 
#carregamento{
    position: fixed;
    background-color: #ccc;6.	}
RESOLUÇÃO DO ESTUDO DE CASO
Para a solução do problema proposto, podemos usar <canvas>; já a barra de progresso será preenchida a partir do JavaScript.
O código a seguir apresenta uma solução para o problema em questão:

// iniciando o canvas
var canvas = document.getElementById('carregamento')
var ctx = canvas.getContext('2d');
 
// configurações
var x = 0;
var y = 0;
var altura = 10;
var largura = 0;
var fator = 50;
var resolucao = 1280; 
  
// cor da barra requisitada pela equioe
ctx.fillStyle = "#4169E1";
  
// função que anima a barra de progresso
function animacao(){
    ctx.fillRect(x, y, largura = largura+fator, altura);
 
    // CÓDIGO AVANÇADO: interrompe a função setInterval() 
    //                  para evitar carregamento excessivo
    if(largura > resolucao){
        clearInterval(atualiza); 
    }
}
 
// atualiza a barra a cada 10 milissegundos
var atualiza = setInterval(animacao, 10)
Note que esse código rodará de maneira bastante rápida. Em menos de um segundo, toda a barra estará carregada nesse exemplo. De fato, a velocidade do carregamento dependerá do script criado por outro funcionário da equipe e será definida pela variável “fator”. Por padrão, usamos fator = 50, mas essa variável deve estar disponível para que o outro colaborador a altere de acordo com cada caso. 
Note que a movimentação da barra é definida pela função animacao( ), descrita das linhas 17 a 25, e que o intervalo de atualização é dado pela função setInterval( ), definida na linha 28. Por fim, note que aproveitamos para incluir uma função avançada (linhas 20 a 24) que interrompe a execução de setInterval quando a barra atinge o tamanho máximo da largura da página (no exemplo, de 1280px). 
Ao executar o código acima, você obterá um resultado próximo a este:

Figura 13 | Barra de carregamento à medida que o conteúdo é carregado: a atualização completa pode ocorrer em menos de um segundo. (A) início do carregamento; (B) parte do conteúdo foi carregado; (C) metade do conteúdo foi carregado; (D) carregamento quase concluído; (E) carregamento concluído
(A)

(B)

(C)

(D)

(E)

Fonte: elaborada pelo autor.
Resolução do Estudo de Caso

 


Saiba mais
Biblioteca de áudios
Você pode conseguir arquivos de áudio gratuitos diretamente na biblioteca de áudio do YouTube.
Disponível em: https://bit.ly/3t9INJP. Acesso em: 17 dez.21. 
Capítulo de livro – Canvas
Aprenda a manipular áudio com Canvas. 
Disponível em: https://bit.ly/3JWJR9P. Acesso em: 17 dez. 21.
