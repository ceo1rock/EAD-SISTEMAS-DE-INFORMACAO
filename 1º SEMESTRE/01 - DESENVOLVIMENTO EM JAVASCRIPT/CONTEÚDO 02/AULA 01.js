0%
APIs - Bibliotecas para desenvolvimento em JavaScript

Aula 1 - APIs de navegador – manipulando documentos
49 minutos

Aula 2 - APIs de navegador – manipulando áudio e gráfico
49 minutos

Aula 3 - APIS de navegador – comunicando com o servidor
56 minutos

Aula 4 - Trabalhando com APIs de terceiros
48 minutos

Referências
2 minutos

Aula 1
APIS DE NAVEGADOR – MANIPULANDO DOCUMENTOS
Nesta aula, você vai aprender a manipular documentos web por meio do DOM, conhecer seus métodos e elementos usando JavaScript, e manipular estilos CSS.

49 minutos


INTRODUÇÃO
Olá, estudante!
JavaScript é uma linguagem que permitiu que páginas web, antes estáticas, tornassem-se interativas. Por meio de métodos e propriedades do JavaScript, é possível realizar alterações diretamente no documento HTML, manipulando o chamado DOM. 
DOM é um acrônimo para Document Object Model ou, na tradução, “Modelo de Objeto de Documentos”. Essa especificação trata da tentativa de padronizar a forma como documentos web são construídos, a fim de que navegadores e diferentes linguagens de programação consigam lê-los, independentemente de quem os produziu e da plataforma utilizada. 
Nesta aula, você vai aprender a manipular documentos web por meio do DOM usando JavaScript, bem como conhecer os métodos e elementos do DOM e ver como manipular estilos CSS de páginas usando JavaScript.
Bons estudos!

INTRODUÇÃO AO DOM
DOM, acrônimo para Document Object Model ou, na tradução, “Modelo de Objeto de Documentos”, é considerado a API fundamental para manipular documentos HTML (FLANAGAN, 2011). A ideia por trás da criação do DOM é que páginas da internet possam ser construídas com uma estrutura padronizada, assim, diferentes linguagens de programação podem acessar e manipular objetos presentes no documento, que, por sua vez, pode ser carregado corretamente de forma independente do navegador, do sistema ou da plataforma utilizada. 
Na hierarquia DOM, elementos são representados como uma árvore, e em um documento HTML, as tags representam os nós da árvore. O elemento de nível superior é denominado elemento pai, enquanto os elementos internos são chamados de elementos filhos e os elementos de mesmo nível são chamados de irmãos, conforme Figura 1.

Figura 1 | Ilustração da árvore DOM de um documento web. Tags HTML representam os nós

Fonte: adaptada de Mariano; Melo-Minardi (2017).
Essa árvore DOM é uma representação deste mesmo código em HTML:

Código 1 | Árvore DOM
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta>
    </head>
    <body>
        <a></a>
        <p></p>
        <ul>
            <li></li>
        </ul>
    </body>
</html>
Fonte: elaborado pelo autor.
Introdução a eventos no DOM
No DOM, a janela e os guias de um navegador são representados pelo objeto window, que possui a propriedade document, que representa o conteúdo da janela (FLANAGAN, 2011). Com JavaScript, é possível navegar pela árvore DOM, manipulando elementos e eventos. Em um arquivo HTML, inclua o seguinte código:

Código 2 | Arquivo HTML
<!DOCTYPE html>
<html>
    <head>
        <title>DOM</title>
        <meta charset="utf-8">
    </head>
 
    <body onload="window.alert('Olá, mundo!')"></body>
 
</html>
Fonte: elaborado pelo autor.
Note que, ao executar esse código, surge uma simples mensagem “Olá, mundo!” (conforme Figura 2) em uma caixa de diálogo gerada pelo comando alert( ).

Figura 2 | Alerta gerado por um evento onload

Fonte: elaborada pelo autor.
Note que não seria nada diferente criar um simples script com um comando alert( ) embutido, entretanto, aqui, utilizamos vários conceitos da manipulação do DOM. 
Primeiro, utilizamos um atributo HTML para disparar um evento onload, que é executado no momento que a tag é carregada, ou seja, como aplicamos à tag body, o evento será disparado imediatamente quando a tag for carregada. Podemos imaginar um evento como uma ação que ocorre quando algum “gatilho” é disparado, e o onload é um dos exemplos mais simples de gatilhos, pois é disparado quando alguma coisa é carregada, mas há muitos outros tipos. Os mais comuns são os eventos que envolvem ações do mouse (como quando clicamos com o mouse em algum lugar: onclick), ações do teclado (quando pressionamos uma tecla: keypress), ações realizadas em formulários (como quando clicamos no botão de envio de um formulário: submit) ou eventos de janela (como rolar na página, scroll, ou mesmo os eventos que envolvem o simples carregamento, load). No exemplo apresentado, utilizamos um evento de janela (window), e, no caso, o método escolhido foi o alert(), que exibe uma mensagem em uma caixa de diálogos. Uma lista completa de eventos e recursos pode ser encontrada aqui: https://mzl.la/3q3kw64.

Manipulando o DOM: escrevendo em um documento
Podemos manipular o conteúdo de um documento HTML por meio do DOM, usando o objeto document no JavaScript. Uma manipulação simples seria utilizar JavaScript para gravar informações diretamente no documento, e, para isso, criamos um documento HTML, que vamos chamr de “index.html”, e outro arquivo JavaScript, que vamos chamar de “script.js”:

Código 3
index.html
<!DOCTYPE html>
<html>
    <head>
        <title>DOM</title>
        <meta charset="utf-8">
        <script src="script.js"></script>
    </head>
    <body></body>
</html>
script.js
document.write("Olá, mundo!")
Ao abrirmos o arquivo HTML no navegador, aparecerá a seguinte mensagem (Figura 3):

Figura 3 | Mensagem exibida no navegador

Fonte: elaborada pelo autor.
Note que a mensagem não estava inicialmente presente no documento HTML, mas quando acessamos a ferramenta inspecionar no navegador (e clicamos na aba “Elementos”) podemos perceber que o texto está, agora, presente dentro da tag Body. Observe a Figura 4.

Figura 4 | Código visualizado na ferramenta inspecionar do Chrome (pressione F12). Note que a tag body estava vazia no código que declaramos inicialmente, e ela foi preenchida pelo script

Fonte: elaborada pelo autor.
Nesse exemplo, usamos o método write( ) para gravar uma mensagem diretamente no corpo do documento (local definido pelo objeto document), e note que, se houver qualquer coisa no documento, o comando document.write() irá gravar antes. Por exemplo, digamos que desejamos alterar o arquivo HTML:

<body>Tudo bem?</body>
Ao recarregarmos a página, veremos a figura a seguir:

Figura 5 | Mensagem gerada pelo script é gravada antes da mensagem que já estava no <body>

Fonte: captura de tela elaborada pelo autor.
Podemos definir locais específicos para que as alterações ocorram, mas, antes, você precisa conhecer os métodos de seleção de elementos no DOM, que veremos no próximo bloco.

VIDEOAULA: INTRODUÇÃO AO DOM
Nesta aula, você irá conhecer a árvore DOM (Document Object Model). 
Bons estudos!

Videoaula: Introdução ao DOM

 


MÉTODOS E ELEMENTOS DOM
Vimos, anteriormente, que é possível manipular um documento HTML usando JavaScript pelo objeto document. Como exemplo, usamos o método write() para gravar uma mensagem na tela, entretanto, da forma feita, as mensagens só poderiam ser gravadas no início do texto. JavaScript fornece uma série de métodos para selecionar e manipular partes específicas de documento web. Por exemplo: podemos selecionar elementos específicos do DOM por meio de quatro funções:

getElementById: seleciona um único elemento com base em seu identificador único (id).
getElementsByTagName: seleciona todos os elementos de tags de mesmo nome especificado.
getElementsByClassName: seleciona todos os elementos que possuem determinada classe (class).
querySelectorAll: seleciona elementos a partir de um seletor CSS.
Para exploração desses métodos, vamos utilizar um modelo de site bem simples, como podemos visualizar na Figura 6:

Figura 6 | Modelo de site bem simples composto por quatro seções: (1) cabeçalho (vermelho), (2) seção principal de conteúdo (azul), (3) barra lateral (verde) e (4) rodapé (cinza)

Fonte: captura de tela elaborada pelo autor.
A seguir, serão apresentados os códigos HTML (responsável pelo arcabouço da página) e CSS (responsável pelos estilos) que geram essa página:

Index.html
<!DOCTYPE html>
<html>
<head>
  <title>DOM</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="estilo.css">
  <script src="script.js"></script>
</head>
<body>
  <!-- Cabeçalho da página -->
  <header>
      <div id="logo">
        <a>Meu site</a>
      </div>
 
  </header>
 
  <!-- principal região -->
  <main>
    
    <!-- Seção à esquerda --> 
    <section>
       <h1>Home</h1>
       <p class="texto">Bem-vindo ao meu site.</p>
       <p class="texto">Tudo bem?</p> 
    </section>
 
    <!-- menu lateral direito -->
    <aside>
      <p>Barra lateral.</p>
    </aside>
 
  </main>
 
  <!-- Rodapé -->
  <footer>
    Todos os direitos reservados.
  </footer>
 
</body>
</html>
estilo.css
/* remove margens inseridas pelo navegador */
*{ margin:0; } 
 
/* TAGS */
header{ 
    height: 100px; /* altura */
    background-color: red; /* fundo: vermelho */
}
section{ 
    height: 200px; /* altura */
    width: 70%; /* largura */
    background-color: blue; /* fundo: azul */
    float:left; /* alinhar à esquerda */
}
aside{ 
    height: 200px; /* altura */
    width: 30%; /* largura */
    background-color: green; /* fundo: verde */
    float:right; /* alinhar à direita */
}
footer{
    clear:both; /* corrige problemas de alinhamento */
    height: 30px; /* altura */
    background-color: grey;/* fundo cinza */
    text-align: center; /* texto centralizado */
}
 
/* ID */
#logo{
    color:white; /* cor texto: branco */
    font-size: larger; /* fonte maior */
    text-align: center; /* texto-centralizado */
}
 
/* CLASS */
.texto{
    color: yellow; /* cor amarelo */
}
Não é o objetivo desta aula discutir como esses códigos HTML e CSS foram implementados e sim como acessá-los e manipulá-los usando JavaScript. Por isso, foram utilizados vários tipos distintos de tags e cores nas seções para ilustrar como manipular o DOM usando JavaScript.
O getElementById é usado para selecionar um elemento com base no seu ID. No exemplo, temos apenas um elemento com ID configurado, denominado “logo’, então, coletá-lo. Para tanto, crie um arquivo chamado “script.js”:

var logo = document.getElementById('logo')
console.log(logo)
Ao executarmos esse código, vemos, no console, o valor null, e isso ocorre porque declaramos o script antes do elemento (lembre-se de que o JavaScript lerá linha a linha, logo, se o script for carregado antes do elemento, ele não conseguirá encontrá-lo), no entanto, podemos resolver isso alterando a posição de chamada do script (movendo-o da tag para o , por exemplo) ou usar um evento onload para esperar que todo arquivo HTML esteja carregado para que o script possa começar a executar. Preste atenção em como podemos usar esse tipo de evento em um arquivo JS:

window.onload = ()=>{
    var logo = document.getElementById('logo')
    console.log(logo)
}
Agora, observe o resultado no console:

Figura 7 | Conteúdo de um elemento coletado por getElementById

Fonte: captura de tela elaborada pelo autor.
Veja que, ao carregarmos o objeto para uma variável, todo o conteúdo da tag é selecionado e armazenado nela. Uma vez que o objeto é armazenado em uma variável, podemos fazer alterações aplicando um novo valor à propriedade innerText. Veja:

window.onload = ()=>{
    var logo = document.getElementById('logo')
 
    logo.innerText = "Mudando o título"
    console.log(logo)
}
Veja que, ao executarmos esse código, o título da página é substituído, conforme Figura 8:

Figura 8 | Substituindo um título

Fonte: captura de tela elaborada pelo autor.
Note que, dentro desse elemento, havia uma tag que foi removida, e isso aconteceu porque a propriedade innerText permite a alteração apenas do texto. Podemos fazer alterações que permitam a incorporação de códigos HTML usando a propriedade innerHTML:

logo.innerHTML = "<a>Mudando o título</a>"
O método getElementsByTagName permite coletar todos os elementos com um mesmo nome de tag. Por exemplo: em nosso código, temos várias tags <p>, e podemos coletá-las usando:

window.onload = ()=>{
    var tags_p = document.getElementsByTagName('p')
 
    console.log(tags_p)
}
Note que, ao executarmos esse código, o JavaScript retorna um objeto do tipo HTMLCollection, assim como temos na Figura 9.

Figura 9 | Coletando vários elementos

Fonte: captura de tela elaborada pelo autor.
Podemos manipulá-lo usando um laço de repetição:

window.onload = ()=>{
    var tags_p = document.getElementsByTagName('p')
 
    for(tag of tags_p){
        console.log(i)
    }
}
Note que precisamos usar a palavra reservada of para indicar que queremos navegar pelos itens da variável em questão. Observe o resultado:

Figura 10 | Navegando por resultados de uma consulta getElementsByTagName

Fonte: captura de tela elaborada pelo autor.
getElementsByClassName
Podemos usar o código a seguir para selecionar elementos com base no nome da classe:

window.onload = ()=>{
    var class_texto = document.getElementsByClassName('texto')
 
    for(i of class_texto){
        console.log(i)
    }
}
Note que, assim como o getElementsByTagName, o método getElementsByClassName retorna uma lista de objetos que podemos manipular usando laços. No exemplo, temos apenas duas tags que recebem a classe “texto”. Veja o que será impresso no console:

Figura 11 | Usando getElementsByClassName

Fonte: captura de tela elaborada pelo autor.
O querySelectorAll permite a realização de buscas avançadas com base em seletores CSS:

window.onload = ()=>{
    var p_em_aside = document.querySelectorAll('aside p')
 
    console.log(p_em_aside[0])
}
No código acima, recuperamos todas as tags que estão dentro de uma tag (seletor “aside p”). Note que esse método também retorna uma lista de itens, mas, dessa vez, optamos por coletar o primeiro elemento diretamente, usando colchetes e indicando o índice 0.

VIDEOAULA: MÉTODOS E ELEMENTOS DOM
Nesta aula, você vai aprender a selecionar elementos do DOM com base no ID, na class, na tag e no seletor CSS usando os métodos JavaScript. Bons estudos!

Videoaula: Métodos e elementos DOM

 


DOM CSS
O CSS é a linguagem usada para configuração de estilos da página, como cores, fontes, altura largura de blocos, entre outras inúmeras funcionalidades. Por padrão, as cores são definidas no arquivo CSS e incorporadas à página na tag , todavia, podemos alterar os estilos após o carregamento usando códigos JavaScript. Em aplicações reais, a alteração de estilos pós-carregamento é de vital importância. 
Por exemplo: imagine que você está desenvolvendo uma página de cadastro de produtos e que ela foi construída a partir de requisições assíncronas, em que, ao enviar o produto, não é necessário recarregar a página. Em certas situações, isso poderá ajudar a melhorar a performance do site com um gigantesco número de acessos, uma vez que os servidores não vão precisar enviar todas as informações novamente, entretanto, como o usuário do sistema saberá que o envio foi feito? 
A solução mais simples para isso é exibir uma mensagem ao usuário de que o envio foi realizado com sucesso. Em geral, isso é feito em um box com fundo verde e um sinal indicando o sucesso no envio. Esses componentes visuais são construídos usando-se CSS, entretanto, podemos carregá-los para a página usando os métodos e as propriedades da linguagem JavaScript. Observe a sintaxe de como isso pode ser feito:

[elemento-selecionado].style.[propriedade-css] = [novo-valor]
Para ilustrar isso, vamos alterar o estilo de alguns dos componentes da página criada anteriormente. No exemplo a seguir, vamos alterar a cor de fundo da tag de vermelho para roxo.

window.onload = ()=>{
 
    // selecionando o objeto
    var selecionado = document.getElementsByTagName('header');
 
    // pegando apenas o primeiro resultado
    selecionado = selecionado[0];
 
    // alterando a cor do fundo para roxo
    selecionado.style.backgroundColor = 'purple';
 
}
Figura 12 | Páginas antes e depois de executar o script
Antes

Depois

Fonte: captura de tela elaborada pelo autor.
Note que a propriedade CSS responsável por alterar a cor de fundo é background-color, entretanto, nós utilizamos backgroundColor, e isso foi necessário pois o JavaScript não permite “-“ nos nomes das variáveis. Por isso, para alterar propriedades CSS compostas, como background-color, text-align, font-size, entre outras, é necessário remover o hífen e colocar em maiúscula a primeira letra da segunda palavra (por exemplo: backgroundColor, textAlign, fontSize); além disso, uma vez feita a seleção, é possível aplicar várias propriedades ao mesmo elemento, como:

// aplicando várias propriedades
selecionado.style.fontSize = '80px'; // aumentar fonte
selecionado.style.color = 'black'; // texto em preto
selecionado.style.width = '50%'; // largura = 50%
Figura 13 | A fonte do título foi aumentada e a largura do bloco reduzida pela metade. Note que o comando que altera a cor para o preto não funcionou

Fonte: captura de tela elaborada pelo autor.
Note que a propriedade que altera a cor do texto não funcionou na prática (ainda que tenha sido aplicada à tag ), e isso se deve ao fato de o texto estar embutido dentro de outra tag (uma div). Além disso, há uma propriedade CSS aplicada diretamente a essa div que altera a cor para o branco. 
Para resolver esse problema, podemos fazer uma nova seleção partindo da seleção feita anteriormente. No código a seguir, criaremos uma nova variável chamada “texto_selecionado”, e essa variável será responsável por armazenar o resultado de uma busca pelo elemento de ID “logo” (ou seja, o texto “Meu site”).

// selecionando a div de id #logo
var texto_selecionado=selecionado.querySelectorAll('#logo')[0]
 
// muda a cor do texto para preto
texto_selecionado.style.color = 'black';
Observe, na Figura 14, que, agora, a cor da fonte do título foi alterada, passando a ser preta.

Figura 14 | A cor do título passou a ser preta

Fonte: captura de tela elaborada pelo autor.
Por fim, repare no código a seguir:

var texto_selecionado=selecionado.querySelectorAll('#logo')[0]
Nele, há dois pontos de destaque:

('#logo'): o símbolo “#” antes do nome buscado indica que estamos procurando um ID; se estivéssemos buscando uma classe, esse símbolo seria substituído por um ponto “.”;
[0]: é importante refrisar que, mesmo que a busca retorne apenas um elemento, o método querySelectorAll retorna uma lista de itens, por isso, devemos indicar que queremos apenas o elemento no índice zero.
Com os conhecimentos apresentados até aqui, você já é capaz de realizar quaisquer alterações no CSS usando JavaScript. Por conta própria, teste algumas outras propriedades CSS e manipule-as usando JavaScript. Bons estudos!

VIDEOAULA: DOM CSS
Nesta aula, você vai aprender a manipular o CSS usando JavaScript. Bons estudos!

Videoaula: DOM CSS

 


ESTUDO DE CASO
Você foi contratado para trabalhar em uma agência de publicidade que também atua como desenvolvedora de sites: a Empresa A. Nas últimas semanas, você tem recebido muitas atividades para concluir, em especial, a pedido do time de recursos humanos. De fato, toda a equipe da empresa tem ouvido falar de você e, por isso, outros setores querem a sua ajuda.
O time de desenvolvimento finalmente percebeu que você estava pronto para um novo desafio e o colocou para trabalhar em um projeto de um cliente importante: uma agência de moda ou a Empresa B. Atualmente, nossa agência cuida da publicidade da Empresa B, portanto, é de nosso interesse que o website siga os valores e as estratégias definidas pelo setor de marketing. A Empresa B é uma organização jovem e moderna e tem seu portfólio baseado na coleção da estação, por isso, decidiu que a cor de fundo do site deverá se basear na estação atual. 
Nosso time de designers definiu quatro tons para as quatro estações:

Primavera: #ffd6ef
Verão: #fdf080 
Outono: #c0dd5d 
Inverno: #9dbce3
Esses números hexadecimais representam códigos de cores no padrão RGB (red, green, blue) e irão formar as seguintes cores:

Figura 15 | Cores para as estações. Topo-esquerda: primavera #ffd6ef; topo-direita: verão: #fdf080; rodapé-esquerda: outono: #c0dd5d; rodapé-direita: inverno: #9dbce3

Fonte: elaborada pelo autor.
O sistema do site foi construído usando-se o framework CodeIgniter em PHP, mas você não precisa se preocupar com a tecnologia usada no back-end, você apenas editará um script chamado “cores.js”, que será incluído na página. 
As estações mudam próximas a essas datas:

22 de setembro: primavera.
21 de dezembro: verão.
20 de março: outono.
21 de junho: inverno.
Entretanto, esse valor muda a cada ano, e é preferível para a empresa fazer a alteração de cores alguns dias antes, para os clientes ficarem cientes da nova estação que está por vir. Por isso, considere apenas os meses para as trocas de cores (setembro, dezembro, março e junho).
Seu desafio, agora, é construir um código fonte que altera a cor de fundo da página de acordo com a estação do ano. Para isso, utilize o seu editor de código e um navegador para testar as implementações.

Dica
Você pode obter a data em JavaScript usando a função Date(). No caso, você deve instanciar um novo objeto para receber Date(). Dessa forma: var data = new Date();
Dia, mês e ano podem ser coletados do novo objeto usando-se os métodos getDate(), getMonth() e getFullYear(), respectivamente (apenas para getMonth, é necessário somar um, pois ele retorna meses de 0 a 11).

RESOLUÇÃO DO ESTUDO DE CASO
Para solucionar esse desafio, primeiro, devemos obter a data atual, pegar o número correspondente ao mês e, em seguida, verificar qual o mês atual para definir a cor que será aplicada à página. Por fim, podemos alterar a cor de fundo da página modificando a propriedade background-color usando o seletor do body. Veja como implementar isso:

// data atual
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth()+1; 
var ano = data.getFullYear();
 
// estação = [mes]
var outono = 3;
var inverno = 6;
var primavera = 9;
var verao = 12;
 
var cor; // nenhuma cor definida
 
// outono
if((mes >= outono)&&(mes < inverno)){
    cor = "#c0dd5d";
}
// inverno
else if((mes >= inverno)&&(mes < primavera)){
    cor = "#9dbce3";
}
// primavera
else if((mes >= primavera)&&(mes < verao)){
    cor = "#ffd6ef";
}
// verão
else if(((mes >= 1)&&(mes < outono))||(mes==12)){
    cor = "#fdf080";
}
 
 
// alterando a cor do background
document.body.style.backgroundColor = cor;
Coletamos o mês atual na linha 4 e precisamos somar 1 ao valor do mês, pois o JavaScript retorna uma lista numérica iniciada de 0 a 11, logo, o mês de janeiro estaria na posição 0, o mês de fevereiro na posição 1 e assim sucessivamente. Das linhas 7 a 11, indicamos o número do mês de cada estação, e das linhas 15 a 30, definimos qual a cor correspondente a cada mês. Veja que o maior desafio foi encontrado nos meses correspondentes ao verão, pois deveria pegar os meses de dezembro, janeiro e fevereiro (ou seja, 12, 1 e 2), por isso, usamos as regras: mês >= 1 e mês < 3 ou mês igual a 12 e, por fim, alteramos a cor do background na linha 34.

Resolução do Estudo de Caso

 


Saiba mais
Seletores CSS 
Aprenda mais sobre seletores CSS acessando este artigo. Disponível em: https://mzl.la/3r1W1p5. Acesso em: 17 dez. 2021.
Elementos DOM HTML JavaScript
Conheça os elementos para manipulação de HTML com JavaScript. Disponível em: https://bit.ly/3f8lvvB. Acesso em: 17 dez. 2021.
Eventos e DOM
Acesse o conteúdo do link a seguir e aprenda um pouco mais sobre manipulação de eventos e do DOM usando JavaScript.
Disponível em: https://bit.ly/3JYI4Ru. Acesso em: 17 dez. 2021.
jQuery
jQuery é um dos frameworks JavaScript mais populares do mercado; ele permite uma manipulação do DOM de forma mais simplificada. Disponível em: https://jquery.com/. Acesso em: 17 dez. 2021.

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

Aula 3
APIS DE NAVEGADOR – COMUNICANDO COM O SERVIDOR
O paradigma cliente-servidor é uma das bases do funcionamento da internet. Nele, um cliente (um usuário em um laptop, por exemplo) requisita um serviço (como um website) a um servidor remoto (que, por sua vez, responde enviando os dados ao cliente).

56 minutos


INTRODUÇÃO
Olá, estudante!
O paradigma cliente-servidor é uma das bases do funcionamento da internet. Nele, um cliente (um usuário em um laptop, por exemplo) requisita um serviço (como um website) a um servidor remoto (que, por sua vez, responde enviando os dados ao cliente). Nas primeiras aplicações web, o processo de requisição e resposta era feito de forma síncrona entre cliente e servidor, mas nos dias de hoje, as requisições assíncronas têm sido bastante utilizadas, o que tem permitido que websites atendam a um maior número de clientes com um menor consumo de rede e uma melhor experiência na interface. 
Conexões assíncronas entre cliente e servidor em páginas web podem ser realizadas com HTML5 e JavaScript a partir do objeto XMLHttpRequest (XHR) implementado na maioria dos navegadores. Ao uso de JavaScript para comunicação entre cliente e servidor de forma assíncrona dá-se o nome de AJAX. Nesta aula, você aprenderá mais sobre o objeto XHR e sobre AJAX.
Bons estudos!

MÉTODOS E PROPRIEDADES XMLHTTPREQUEST
Antes de adentrarmos no mundo do XMLHttpRequest, precisamos relembrar um conceito básico em desenvolvimento web: o paradigma cliente-servidor. Nesse paradigma, computadores com grande poder computacional fornecem um serviço que pode ser requisitado por clientes pela internet, como no caso dos servidores web, que hospedam páginas de internet (Figura 1).

Figura 1 | Paradigma cliente-servidor. No exemplo, um servidor web fornece acesso a uma série de sites hospedados e os clientes podem fazer requisições HTTP/HTTPS pela internet e receber, como resposta, documentos web

Fonte: Wikimedia Commons.
Entretanto, esse processo de requisição de um site a um servidor remoto pode ser feito de forma síncrona ou assíncrona. Nas requisições síncronas, cada operação deve ser concluída para que uma nova operação possa ser realizada, já nas requisições assíncronas, não é necessário aguardar o fim de uma operação. Podemos ver a diferença na prática, por exemplo, quando preenchemos um formulário de cadastro e enviamos informações para um servidor remoto. Na requisição síncrona, o navegador precisará recarregar a página após enviar os dados, já na requisição assíncrona, isso não será necessário. À medida que os dados são digitados, o navegador envia as informações para o servidor sem a necessidade de recarregar a página (na prática, não seria necessário um botão de salvar, por exemplo). Se bem projetados, sistemas assíncronos tendem a ter uma performance maior, uma vez que reduzem o fluxo de dados na rede (o servidor não precisa enviar os dados de uma página inteira a cada requisição, pois apenas uma fração de dados precisa ser enviada). Na Figura 2, isso é ilustrado pelos caminhões carregando os documentos pesados enquanto os carrinhos de mão são usados para transportar dados.

Figura 2 | Abstração da comunicação síncrona (A) versus comunicação assíncrona (B)

Na comunicação assíncrona não é necessário aguardar que a comunicação esteja concluída para envio de dados, podendo ser feita em paralelo. Na comunicação síncrona, há muito mais dados trafegados pela rede, e essa figura não leva em consideração o cache produzido nos navegadores.
Fonte: Wikimedia Commons.
Observe como a comunicação síncrona exige menos conexões, entretanto, há a necessidade de envio de arquivos mais “pesados”, que tendem a ocupar uma maior largura de banda (Figura 2 A). Enquanto isso, na comunicação assíncrona, há uma maior quantidade de conexões, mas elas podem ser feitas em paralelo, transmitindo uma menor quantidade de dados e reduzindo as etapas de envio de arquivos “pesados” (Figura 2 B).
Em sistemas que requerem alto grau de processamento (como e-commerces com milhões de acessos diários), a comunicação assíncrona pode reduzir o tráfego da rede e garantir que mais pessoas acessem ao mesmo tempo. Entretanto, as comunicações assíncronas podem não representar grandes vantagens para sistemas de pequeno porte (sites com acessos na casa das centenas ou milhares por dia), e isso se deve ao fato de requisitarem uma complexidade maior de implementação, especialmente no que diz respeito à segurança e à garantia de que os dados foram entregues.
Assim, surgiu o XMLHttpRequest (XHR), um objeto ou uma API implementada em navegadores que facilitou a comunicação assíncrona com servidores. A ideia do XHR é permitir que dados sejam comunicados por meio de requisições HTTP (ou HTTPS) e arquivos no formato XML (na prática, outros formatos também podem ser usados, como JSON).
Veja, a seguir, como instanciar um objeto XHR para comunicações assíncronas com o servidor:

var xhr = new XMLHttpRequest();
Entre os principais métodos e propriedades desse objeto, podemos citar, entre outras:

open( ): abre a conexão.
readyState: verifica o estado da conexão.
responseText: contém a resposta da conexão.
responseType: formato da resposta esperado (exemplo, json).
send( ): envia a requisição.
status: estado da requisição.
Agora que você já conhecer o objeto XMLHttpRequest, podemos, finalmente, falar sobre a implementação mais comum dele com JavaScript: a tecnologia AJAX. Você verá mais detalhes no próximo bloco.

VIDEOAULA: MÉTODOS E PROPRIEDADES XMLHTTPREQUEST
Nesta aula, você vai aprender um pouco mais sobre conexões síncronas e assíncronas e conhecer o objeto XMLHttpRequest. 
Bons estudos!

Videoaula: Métodos e propriedades XMLHttpRequest

 


INTRODUÇÃO AO AJAX
AJAX é um acrônimo para Asynchronous Javascript and XML ou, em português, "Javascript Assíncrono e XML". Apesar do nome, a maior parte das implementações AJAX em sites modernos costumam usar JSON no lugar de XML para transferência de dados. Uma das principais características do AJAX é o uso de scripts HTTP/HTTPS para iniciar conexões com servidores remotos sem a necessidade de refresh (FLANAGAN, 2011). 
Com AJAX, é possível realizar requisições em segundo plano, sem a necessidade de recarregar a página. Isso tem sido a base das chamadas Single Page Applications (SPA) ou aplicações de página única, que são páginas que não precisam recarregar para apresentar componentes novos. Por exemplo, quando você usa o serviço de e-mails da Google, o Gmail, ou quando você realiza um post no Facebook ou no Twitter, note que apenas regiões específicas da página são recarregadas, fazendo com que a experiência de uso seja mais suave e agradável. Isso ocorre pois são feitas requisições assíncronas.
Note que AJAX é uma tecnologia ou apenas uma terminação para indicar conexões assíncronas com JavaScript, independentemente da linguagem usada no servidor. Na prática, AJAX utiliza a API XMLHttpRequest para comunicação entre cliente e servidor, e, nessa requisição, o JavaScript é responsável por checar, constantemente, o objeto que mantém o status da comunicação. Quando concluída essa tarefa, dados são transferidos usando-se XML ou JSON, mas como implementar isso na prática?

AJAX na prática
Vimos, no bloco anterior, que é possível instanciar um objeto XHR usando o método XMLHttpRequest( ); dessa forma:

var xhr = new XMLHttpRequest();
Após instanciar um objeto XHR, é preciso prestar atenção em algumas propriedades e métodos. O método open( ) abre a conexão com o servidor remoto, para isso, ele recebe um verbo HTTP, como GET (usado para requisição de dados) e POST (usado para envio de dados), além de uma URL. Por fim, a requisição é enviada usando-se o método send( ).

xhr.open("GET", "https://um-site-qualquer.com.br")
xhr.send()
Para verificar se a comunicação com servidor remoto está funcionando, é preciso vigiar as propriedades onreadystatechange e suas outras propriedades (informalmente, dizemos que estamos “escutando” a conexão). Entre as principais, estão as propriedades response e responseText, que irão conter a resposta da requisição, mas também há outras propriedades de grande importância, como a propriedade readyState, que retorna o cabeçalho da requisição, ou seja, se a conexão já está aberta ou não (Tabela 1).

Tabela 1 - Estados da propriedade readyState
Código	Descrição
0	Requisição ainda não iniciada.
1	Requisição com o servidor estabelecida.
2	Pedido foi recebido.
3	Pedido sendo processado.
4	Solicitação concluída.
Fonte: adaptada de MDN Web Docs (2021).
Outra que vale a pena citar é a propriedade status, que retorna se já temos uma resposta para a requisição, em geral, como um código de três dígitos (Tabela 2).

Tabela 2 | Mensagens HTTP
Código	Descrição
100 - 199	Respostas de informação.
200 - 299	Respostas de sucesso.
300 - 399	Redirecionamentos.
400 - 499	Erros do cliente.
500-599	Erros do servidor.
Fonte: adaptada de MDN Web Docs (2021).
Entre os códigos mais conhecidos, estão:

200 (tudo ok).
401 (acesso não autorizado).
403 (acesso proibido).
404 (page not found: página não encontrada).
500 (erro interno no servidor).
Veja como onreadystatechange pode ser usada para escutar se alguma outra propriedade foi alterada:

Código 1 | Código onreadystatechange
var xhr = new XMLHttpRequest(); // cria objeto xhr
 
xhr.responseType = "json";  // tipo da resposta
 
// conecta ao site
xhr.open("GET", "https://um-site-qualquer.com");  
xhr.send()  // envia requisição
 
var i = 0;  // um simples contador
 
// verifia se o estado da conexão mudou
xhr.onreadystatechange = ()=>{
 
  var pronto = xhr.readyState;  // a conexão foi feita?
  var estado = xhr.status;  // status da requisição?
  var resposta = xhr.response;  // qual a resposta?
 
  i++;  // contador de mudanças
 
  console.log("#", i)  // contador de mudanças
 
  // como está a conexão
  console.log("Status da conexão:", pronto); 
 
  // qual o código da resposta
  console.log("Código da resposta:", estado);  
 
  // mostre a resposta
  console.log(resposta);  
 
}
Fonte: elaborado pelo autor.
O código apresentado acima declara um objeto xhr na linha 1; já na linha 3, é declarado o tipo de resposta esperado (json); na linha 6, é aberta a conexão do tipo GET a um servidor remoto (esse site de exemplo não existe); na linha 7, a conexão é enviada; na linha 12, verificamos se houve alguma mudança do estado da conexão; na linha 14, coletamos o estado da conexão, bem como o estado da resposta na linha 15. A resposta, em si, foi recebida na linha 16, e nas linhas seguintes, apenas exibimos o resultado no console. 
Para o site em questão, não teremos uma resposta, pois se trata de um site inexistente (Figura 3).

Figura 3 | Resposta obtida para um site não existente

Note que apenas uma resposta foi obtida e possui código de conexão 4 (a conexão foi aberta e já possui resposta), mas não há um código de resposta (0) e nem valores na propriedade response.
Fonte: elaborada pelo autor.
Caso estivéssemos acessando uma API de web services real (como a ferramenta {JSON} Placeholder, disponível em https://bit.ly/3faOpLu), poderíamos ter uma resposta assim (Figura 4):

Figura 4 | Resposta para consulta ao endereço https://jsonplaceholder.typicode.com/todos

Note que podemos ver várias mudanças de estado. Lembre-se que o código de resposta 200 indica que deu tudo certo (confira a Tabela 1 e a Tabela 2 para entender o significado de cada código). Por fim, a resposta retorna um arquivo JSON com 200 itens.
Fonte: elaborada pelo autor.
Assim, podemos perceber que a tecnologia AJAX tem um grande potencial no desenvolvimento de aplicações web, entretanto, ela deve ser usada com cuidado, uma vez que depende das conexões com os servidores remotos e da forma como eles manipulam os dados. Nesse caso, servidores podem fazer uso das tecnologias de banco de dados para armazenamento, e veremos mais detalhes disso no próximo bloco.

VIDEOAULA: INTRODUÇÃO AO AJAX
Nesta aula, você aprenderá como fazer uma conexão AJAX usando o objeto XMLHttpRequest. Bons estudos!

Videoaula: Introdução ao Ajax

 


AJAX E BANCO DE DADOS
No bloco anterior, você aprendeu a realizar uma conexão AJAX com um servidor remoto. Você viu que, ao realizar uma conexão com um site que não existe, retorna um erro de acesso, e isso ocorre pois é necessário que o site que desejamos acessar forneça uma API (application programming interface) de acesso, que, em geral, é feita usando-se tecnologias web services e pode ser construída a partir de diversas linguagens de programação. Podemos, aliás, construir APIs web services usando JavaScript, entretanto, para isso, devemos utilizar um servidor que permita executar JavaScript diretamente no back-end, como Node.js (LECHETA, 2018). Não é objetivo desta aula mostrar como fazer isso; em vez disso, vamos falar do que acontece com os dados enviados ou recebidos por conexões assíncronas.
A consulta a um serviço remoto, em geral, é feita usando-se formatos de armazenamento padronizado, como XML ou JSON, mas raramente esses arquivos ficam salvos nesses formatos nos servidores. É mais comum que o armazenamento de dados em servidores seja feito pelo uso de sistemas de gerenciamento de bancos de dados (SGBD), que possuem ferramentas mais robustas para armazenamento, consulta, atualização e deleção de dados, como os bancos de dados relacionais MySQL, MariaDB e Postgree. Assim, computadores servidores podem fornecer diferentes serviços de acesso a websites e de banco de dados, que devem comunicar-se entre si para que haja troca de informações (Figura 5). Cabe ao serviço web gerenciar essa conexão e determinar quais dados podem ser acessados e como dados podem ser gravados, alterados ou deletados.

Figura 5 | Requisição e resposta entre cliente e servidor

No exemplo, o computador servidor pode fornecer dois serviços: web e banco de dados (esses serviços podem estar em computadores distintos também); os clientes podem fazer requisições HTTP/HTTPS pela internet e receber, como resposta, documentos web; e o serviço web pode consultar o serviço de banco de dados para busca ou armazenamento de informações.
Fonte: Adaptado, Wikimedia Commons.
Como esse processo de construção de uma API web services é um pouco complexo e foge do escopo desta aula, vamos ilustrar esse processo utilizando o método POST para enviar dados para um servidor remoto (vamos continuar usando a ferramenta {JSON} Placeholder). Observe o código a seguir:

Código 2 | ferramenta {JSON} Placeholder
var xhr = new XMLHttpRequest(); // cria objeto xhr
 
var doc = {
  "userId": 555,
  "title": "Enviando dados",
  "body": "Olá, mundo!"
}
 
// verifia se o estado da conexão mudou
xhr.onreadystatechange = ()=>{
 
  var pronto = xhr.readyState;  // a conexão foi feita?
  var estado = xhr.status;  // status da requisição?
  var resposta = xhr.responseText;  // qual a resposta
 
  // mostre apenas se tudo estiver ok (pronto => 4)      
  if(pronto == 4){ 
    console.log("Código da resposta:", estado);  
    console.log(resposta);  
  }
 
}
 
xhr.open(
  "POST", 
  "https://jsonplaceholder.typicode.com/posts"
);  
xhr.send(doc);  // envia requisição
Fonte: elaborado pelo autor.
Nas linhas 2 a 6, criamos uma variável (doc) para receber um objeto com as propriedades userId (identificador do usuário), title (título da mensagem) e body (conteúdo da mensagem). Esses serão os dados que iremos enviar para o servidor (para descobrir essas propriedades, tivemos que consultar a documentação da web service em questão, e cada web service tem sua especificação, então, não se preocupe com esses nomes). Da linha 8 à linha 20, apenas imprimimos os status do andamento do envio dos dados, e note que, a partir disso, decidimos imprimir a resposta apenas se o status da conexão fosse 4, ou seja, a solicitação já estava concluída (Figura 6).

Figura 6 | Status do andamento do envio dos dados

Note que o código 201 indica que os dados foram enviados com sucesso. O id que aparece na resposta indica que um novo dado foi gravado na posição 101.
Fonte: elaborada pelo autor.
Agora, devemos prestar atenção nas linhas 23 a 26. Nelas, foram feitas as requisições do tipo POST; já na linha 27, enviamos os dados presentes na variável doc. O servidor remoto deve receber dados pela URL passada e decidir o que fazer com eles. Nesse caso, o servidor pode gravar as informações em um banco de dados ou apenas gravá-las em um arquivo JSON. Note que, como consumidores de uma web service, não sabemos o que é feito com esse dado (o que insere uma camada extra de proteção ao servidor); obtemos, apenas, a resposta indicando se o que era esperado foi feito ou não. No exemplo, sabemos que deu certo, pois recebemos o status 201 e obtivemos, como resposta, um id indicando que o dado foi gravado.

VIDEOAULA: AJAX E BANCO DE DADOS
Nesta aula, você aprenderá um pouco mais sobre conexões assíncronas AJAX e sua interligação com os processos de consulta e gravação em bancos de dados. 
Bons estudos!

Videoaula: Ajax e banco de dados

 


ESTUDO DE CASO
A Empresa A, empresa de marketing e desenvolvimento de sites, está crescendo cada vez mais no mercado. Por isso, novos trabalhos vêm surgindo e exigindo mais da sua participação como desenvolvedor front-end.
A Empresa B está preocupada com a concorrência, por isso, a equipe de desenvolvedores back-end da Empresa A desenvolveu um sistema de consulta de preços para as principais concorrentes do mercado, bem como uma web service que permite consultas remotas para que outros sistemas da empresa possam consultar. O sistema de consulta funciona por meio de POST e requer, como entrada, os seguintes dados:

Quadro 1 | Dados de entrada
Campo	Descrição	Exemplo
user	Nome do usuário	jsadmin
auth_code	Código de autenticação (senha única de cada usuário).	132fiauiw1yhd821klaslf
product	Nome do produto a ser pesquisado (o sistema possui um algoritmo avançado de detecção de processamento de linguagem natural).	Blusa de estampa da marca BluSA (coleção do verão)
Fonte: elaborado pelo autor.
Por fim, a web service retorna os preços de todas as concorrentes para produtos similares, por exemplo:

Código 3 | Web service
{
    "id":1,
    "product":"Blusa estampada BluS.A. coleção verão",
    "store":"BlusaXique",
    "preco":25.99
}
Fonte: elaborado pelo autor.
A web service está localizada neste endereço: https://bit.ly/3HI8aq6, entretanto, o servidor ainda apresenta instabilidades. Por isso, quando for chamar a função que envia os dados, função xhr.send(), deixe-a comentada e crie uma função chamada imprimirRespostaTeste(), que deverá, apenas, imprimir formatado, em uma tabela na tela, o seguinte array:

Código 4 | Array
var respostaTeste = [
  {
      "id":1,
      "product":"Blusa estampada BluSA coleção verão",
      "store":"Empresa B",
      "price":25.99
  }, 
  {
      "id":2,
      "product":"BluSA coleção verão - blusa estampada",
      "store":"Concorrente 1",
      "price":89.99
  }, 
  {
      "id":3,
      "product":"Blusa BluSA col. verão (estampada)",
      "store":"Concorrente 2",
      "price":29.99
  }, 
  {
      "id":4,
      "product":"Blusa BluS.A. estampada | Collection Summer Miami",
      "store":"Concorrente 3",
      "price":19.99
  }, 
  {
      "id":5,
      "product":"BluS.A. - blusa estampada do verão ",
      "store":"Concorrente 4",
      "price":39.99
  },
]
Fonte: elaborado pelo autor.
Assim, usando o seu editor de códigos favorito e um navegador web para testes, construa um sistema que faça uma consulta ao servidor remoto e imprima o resultado na tela. A consulta deve ser feita por uma função chamada buscar( ) e a função send( ) deve estar comentada; além disso, no lugar dela, você deverá chamar a função imprimirRespostaTeste( ).

Dica
Para lhe ajudar, a equipe de design preparou os arquivos index.html e estilo.css, que constroem a seguinte interface:

Figura 7 | Interface de consulta modelo

Fonte: Lorem ipsum dolor sit amet.
Fique à vontade para usá-los ou não.

Código 5 | index.html
<!doctype html>
<html>
<head>
   <title>Consulta concorrentes</title>
   <meta charset="utf-8">
<link rel="stylesheet" href="estilo.css">
</head>
<body>
   <h1>Sistema de consulta de produtos</h1>
   <input type="text" id="produto" 
    placeholder="Digite o nome do produto a ser pesquisado">
   <button onclick="buscar()">Buscar</button>
 
   <div id="saida"></div>
 
   <script src="script.js"></script>
</body>
</html>
Fonte: elaborado pelo autor.
Código 6 | estilo.css
h1{
    text-align: center;
    padding: 20px 0 30px 0;
}
input{
    display: block;
    width: calc(100% - 40px);
    padding: 0.75rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
button{    
    width: calc(100% - 15px);
    display: block;
    margin-top: 20px;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    border: 1px solid transparent;
    padding: 0.75rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
}
table{
    margin-top: 20px;
    width: calc(100% - 15px);
    color: #333;
}
th{
    background-color:#f4f4f4;
    padding:10px;
}
td{
    border-top: 1px #ccc solid;
    padding: 10px; 
}
Fonte: elaborado pelo autor.
RESOLUÇÃO DO ESTUDO DE CASO
O protótipo apresentado neste código possui um código HTML funcional. Se o usuário digitar algo e realizar uma busca, deverá obter uma tabela como resposta, entretanto, a consulta ao web service não deverá funcionar, pois a linha com a função send( ) deverá estar comentada. 
Caso tenha construído o sistema baseado no modelo proposto (CSS e HTML), sua página final ficará semelhante a esta:

Figura 8 | Consulta de exemplo

Fonte: elaborada pelo autor.
A seguir, apresentaremos um código de exemplo do script.js. Esse arquivo deve ter duas funções: buscar( ) e imprimirRespostaTeste( )
Observe como ficou o código final:

Código 7 | Código de exemplo do script.js
function buscar(){
 
    var xhr = new XMLHttpRequest(); // cria objeto xhr
 
    var produto = document.getElementById("produto").value;
 
    console.log("Realizando consulta por",produto)
 
    var doc = {
        "user": "jsadmin",
        "auth_code": "132fiauiw1yhd821klaslf",
        "product": produto
    }
 
    // verifica se o estado da conexão mudou
    xhr.onreadystatechange = ()=>{
 
        console.log("Consultando web service...")
 
        var pronto = xhr.readyState;  // a conexão foi feita?
        var estado = xhr.status;  // status da requisição?
        var resposta = xhr.responseText;  // qual a resposta
 
        // mostre apenas se tudo estiver ok (pronto => 4)      
        if(pronto == 4){ 
            console.log("Código da resposta:", estado);  
            console.log(resposta);  
        }
 
    }
 
    xhr.open(
        "POST", 
        "https://webservice.Empresa-A.com/consultaprecos"
    );; 
 
    // xhr.send(doc);  // envia requisição
 
    imprimirRespostaTeste(); // teste desenvolvedor
 
}
 
function imprimirRespostaTeste(){
 
    var respostaTeste = [
        {
            "id":1,
            "product":"Blusa estampada BluSA coleção verão",
            "store":"Empresa B",
            "price":25.99
        }, 
        {
            "id":2,
            "product":"BluSA coleção verão - blusa estampada",
            "store":"Concorrente 1",
            "price":89.99
        }, 
        {
            "id":3,
            "product":"Blusa BluSA col. verão (estampada)",
            "store":"Concorrente 2",
            "price":29.99
        }, 
        {
            "id":4,
            "product":"Blusa BluSA estampada | Collection Summer Miami",
            "store":"Concorrente 3",
            "price":19.99
        }, 
        {
            "id":5,
            "product":"BluSA - blusa estampada do verão ",
            "store":"Concorrente 4",
            "price":39.99
        },
    ]
 
    saida = document.getElementById("saida");
 
    gravar = "<table><tr><th>id</th><th>Produto</th><th>Loja</th><th>Preço</th></tr>";
 
    for(i of respostaTeste){
        gravar = gravar + "<tr><td>" + i.id + "</td><td>" + i.product + "</td><td>" + i.store + "</td><td>R$ " + i.price + "</td></tr>";
    }
    
    gravar = gravar+"</table>";
 
    saida.innerHTML = gravar;
}
Fonte: elaborado pelo autor.
O código acima seleciona os valores presentes na caixa de texto (campo de id “produto”); em seguida, esse valor é colocado em um objeto (linha 9 a 13) que será usado na consulta assíncrona (linhas 15 a 30).
Observe que a linha 37, que envia os dados para o servidor remoto, está comentada. No lugar dela, chamamos a função imprimirRespostaTeste( ), na linha 39. Observe, ainda, que a função que simplesmente imprime uma mensagem teste foi implementada da linha 43 a 89. 
Ao executar a página e abrir o console de navegação, é possível ver que a linha 18 foi impressa, logo, o status da conexão assíncrona foi verificado pelo menos uma vez.

Figura 9 | Inspecionar elemento

Fonte: elaborada pelo autor.
O código acima é apenas uma representação de como esse serviço poderia funcionar, pois seria necessário implementar um web service real para testá-lo.

Resolução do Estudo de Caso

 


Saiba mais
Vídeoaula – YouTube (Felipe Aguiar – Laboratório de Código)
Como fazer requisições AJAX com XmlHttpRequest e JavaScript puro.
Disponível em: https://bit.ly/3tcfKoK. Acesso em: 23 dez. 2021.
{JSON} Placeholder - Consulte APIs JSON (ferramenta)
Esse site fornece APIs falsas para que você possa testar conexões via AJAX.
Disponível em: https://bit.ly/3K00r8y. Acesso em: 23 dez. 2021.

Aula 4
TRABALHANDO COM APIS DE TERCEIROS
Nesta aula, falaremos mais sobre APIs no contexto do JavaScript e como podemos incorporar APIs de terceiros em nossas aplicações.

48 minutos


INTRODUÇÃO
Olá, estudante!
Pense em como seria incrível se todos os programas de computador fossem construídos em uma mesma plataforma ou em uma única linguagem de programação. Assim, qualquer programador seria capaz de criar softwares ou novos módulos que se integrariam perfeitamente uns aos outros. Entretanto, a própria natureza da inovação seria prejudicada por isso, uma vez que cada linguagem usada para desenvolvimento de software tem vantagens e desvantagens.
Como pode ver, programadores tem diferentes necessidades e, por isso, usam diferentes linguagens e plataformas. Mas em um mundo em que sistemas web são cada vez mais fundamentais, é vital que sistemas distintos se comuniquem. Assim, surgiram as chamadas APIs (Application Programming Interfaces), que são formas padronizadas para permitir que diferentes softwares se comuniquem, em especial, em sistemas web. Nesta aula, falaremos mais sobre APIs no contexto do JavaScript e como podemos incorporar APIs de terceiros em nossas aplicações. 
Bons estudos!

APRESENTANDO AS PRINCIPAIS APIS DE TERCEIROS
API é um acrônimo para Application Programming Interfaces, que pode ser traduzido como “Interface de programação de aplicações”. Uma API é uma padronização para se delimitar integração entre sistemas distintos, ou seja, são conjuntos de regras estabelecidas para que haja a comunicação. 
Para entender a importância das APIs, vamos imaginar por que sistemas são construídos usando-se diferentes plataformas e linguagens. Leve em consideração que cada linguagem foi projetada com um propósito, o que pode promover vantagens para determinadas necessidades, mas desvantagens em relação a outras. Por exemplo, PHP permite a construção de páginas dinâmicas de maneira bastante simplificada, exigindo, dos programadores, pouco tempo de estudo para a criação de suas primeiras aplicações (BENTO, 2021). Entretanto, a facilidade de codificação também pode ser considerada uma desvantagem, uma vez que permite que códigos de baixa legibilidade e performance sejam produzidos. 
Já a linguagem C permite um controle de mais baixo nível, como acesso direto à memória, o que facilita a criação de programas de maior performance (ZHIRKOV, 2018), mas não tem suporte à orientação a objetos e é limitada no uso de multithreading. Por outro lado, Java é bastante usada para criar aplicações desktop com interface amigável (LECESSI, 2019), mas tem uma curva de aprendizado maior. 
Como pode ver, existem muitas formas de se construir um sistema, muitas linguagens e plataformas (como sistemas operacionais); não há como fugir disso, então, é necessário criar um “ambiente neutro” ou mesmo um conjunto de regras para que diferentes sistemas possam se comunicar. 
Em desenvolvimento web, APIs têm múltiplas finalidades, em especial, envolvendo o reaproveitamento de códigos e serviços criados por terceiros. Na aula anterior, exploramos isso consultando a API do site {JSON} Placeholder, que é uma API construída com a única finalidade de permitir que desenvolvedores web testem sua comunicação via API. Mas existem muitas outras APIs públicas de maior utilidade. 
Tome por exemplo a API dos sistemas de consultas de código de endereçamento postal (CEP). Há vários serviços disponíveis para isso, como o ViaCEP, Api CEP, cep.la, API web service dos Correios ou a API de consultas de CEP do governo federal. Para consultar uma API web service, é preciso fazer uma requisição GET, POST e outros usando HTTP/HTTPS por meio de uma URI. Essa definição pode parecer difícil de ser implementada em JS, mas leve em consideração que simples navegadores de internet fazem requisições HTTP por GET quando digitamos um endereço na barra de navegação (URL). Por exemplo: podemos testar a API web service de consulta de CEP da plataforma ViaCEP acessando o seguinte endereço (substitua XXXXXXX por sete números correspondentes a um cep): https://bit.ly/3HS72QJ. 
Nesse caso, é feita uma consulta a API desse serviço enviando-se como parâmetros de busca o número de CEP, que retornará um arquivo com o endereço correspondente. Veja que esse servidor nos dá a opção de obter resultados em formato XML ou em formato JSON, basta, apenas, alterar o final da URL.

JSON	XML
{
 "cep": "31270-901",
 "logradouro": "Avenida Presidente Antônio Carlos",
 "complemento": "6627",
 "bairro": "Pampulha",
 "localidade": "Belo Horizonte",
 "uf": "MG",
 "ibge": "3106200",
 "gia": "",
 "ddd": "31",
 "siafi": "4123"
}	<xmlcep>
<cep>31270-901</cep>
<logradouro>Avenida Presidente Antônio Carlos</logradouro>
<complemento>6627</complemento>
<bairro>Pampulha</bairro>
<localidade>Belo Horizonte</localidade>
<uf>MG</uf>
<ibge>3106200</ibge>
<gia/>
<ddd>31</ddd>
<siafi>4123</siafi>
</xmlcep>
Fonte: elaborado pelo autor.
A API é a interface de comunicação com o servidor, e note que, para obter a resposta, não é preciso saber como esse servidor guarda os dados (se usa um banco de dados SQL ou NoSQL ou se as informações estão em arquivos de texto simples), basta, apenas, saber a regra para se comunicar com ele: qual a URL padrão e o que é preciso mudar nela para se obter o endereço desejado. Nos próximos blocos, vamos explorar o consumo de APIs de terceiros. Até lá!

VIDEOAULA: APRESENTANDO AS PRINCIPAIS APIS DE TERCEIROS
Nos próximos blocos, você aprenderá como realizar essas consultas na prática usando JavaScript. 
Bons estudos!

Videoaula: Apresentando as principais APIs de terceiros

 


CONSUMINDO DADOS DE APIS DE TERCEIROS I
No bloco anterior, falamos sobre como consultar uma API para conversão de um CEP em um endereço, mas como implementar isso com JavaScript? Vamos fazer isso neste bloco.
A seguir, vamos criar um sistema web para realização de consultas de CEP. Nosso sistema deverá receber, como entrada, um código postal de sete dígitos e retornar informações referentes a esse CEP, como logradouro, cidade, estado etc. Alguns servidores que disponibilizam APIs podem cobrar por acesso, uma vez que APIs com grande quantidade de acesso consomem banda de internet e processamento do servidor, outros requerem cadastro apenas para limitar as quantidades de acesso com base no usuário autenticado. Para esse exercício prático, escolhemos o ViaCEP (https://viacep.com.br/) por não requerer autenticação para realização de consultas (você pode usar outra se preferir). 
Primeiro, vamos criar um simples formulário HTML:

Código 1 | Formulário HTML
index.html
<!DOCTYPE html>
<html>
<head>
  <title>API</title>
  <meta charset="utf-8">
  
</head>
 
<body>
  <!-- busca -->
  
    <input type="text" placeholder="Digite o CEP aqui" 
      id="buscar_cep">
    
    <input type="button" onclick="buscarCEP()" 
      value="Buscar">
  
 
  <!-- Local onde escreveremos o resultado -->
  <p>
    <strong>CEP: </strong>
    <span id="cep"></span>
  </p>
  <p>
    <strong>Logradouro: </strong>
    <span id="logradouro"></span>
  </p>
  <p>    
    <strong>Bairro: </strong>
    <span id="bairro"></span>
  </p>
  <p>
    <strong>Cidade: </strong>
    <span id="cidade"></span>
  </p>
  <p>
    <strong>Estado: </strong>
    <span id="estado"></span>
  </p>
 
  <!—Chamada do script -->
  <script src="script.js"></script>
 
</body>
</html>
Fonte: elaborado pelo autor.
Essa página ficará assim no navegador (veja a Figura 1):

Figura 1 | Página exibida no navegador. Note os campos em branco

Fonte: elaborada pelo autor.
Veja que declaramos várias tags <span> em branco; nelas, gravaremos os resultados. Além disso, no botão “buscar”, chamamos a função buscarCEP(), que não existe ainda, então, vamos criá-la dentro do nosso arquivo “script.js”, mas antes disso, precisamos estudar as especificações da API que desejamos consumir. Para isso, podemos consultar a documentação ou, simplesmente, observar um exemplo para ver quais são os nomes usados em propriedades. Vamos analisar o arquivo JSON e selecionar cinco campos para exibir. São estes: (1) cep, (2) logradouro, (3) bairro, (4) localidade e (5) uf. Observe o fragmento do arquivo JSON produzido para a consulta ao CEP 31270901:

Código 2 | Fragmento do arquivo JSON
{
  "cep": "31270-901",
  "logradouro": "Avenida Presidente Antônio Carlos",
  "bairro": "Pampulha",
  "localidade": "Belo Horizonte",
  "uf": "MG"
 
  […] 
}
Fonte: elaborado pelo autor.
Agora, podemos criar o arquivo “script.js”:

Código 3 | arquivo “script.js”
function buscarCEP(){
 
  // entrada
  var entrada=document.getElementById('buscar_cep').value;
 
  // saída
  var cep = document.getElementById('cep');
  var logradouro = document.getElementById('logradouro');
  var bairro = document.getElementById('bairro');
  var cidade = document.getElementById('cidade');
  var estado = document.getElementById('estado');
 
  // cria objeto xhr
  var xhr = new XMLHttpRequest(); 
  xhr.responseType = "json"; 
 
  // envia requisição
  xhr.open("GET", 
    "https://viacep.com.br/ws/"+entrada+"/json/"); 
  xhr.send();  
 
  // verifia se o estado da conexão mudou
  xhr.onreadystatechange = ()=>{
 
    if(xhr.readyState == 4 && xhr.status == 200){
 
      // mostra resultado na tela
      console.log(xhr.response);
    
      // grava valores
      cep.innerText = xhr.response.cep;
      logradouro.innerText = xhr.response.logradouro;
      bairro.innerText = xhr.response.bairro;
      cidade.innerText = xhr.response.localidade;
      estado.innerText = xhr.response.uf;
    }
  }
 
}
Fonte: elaborado pelo autor.
Observe que a declaração da função buscarCEP() começa na linha 1; já na linha 3, usamos a propriedade value para pegar o valor digitado na caixa de texto com o identificador “buscar_cep”. Das linhas 7 a 11, coletamos os elementos em que gravaremos a saída; e você se lembra das tags <span> vazias que criamos anteriormente? Usamos o objeto XHR para realizar uma conexão com o servidor (linhas 14 a 20). Nesse caso, não estamos interessados no processo de consulta, por isso, usamos um if para verificar se o readyState é 4 (solicitação concluída) e o status é 200 (dados obtidos com sucesso). Se o processo ocorrer sem problemas, gravaremos os dados em cada uma das variáveis (linhas 31 a 35). 
Se tudo der certo, você verá um resultado similar a este (Figura 2):

Figura 2 | Dados preenchidos por meio da consulta à web service de busca de CEPs

Fonte: elaborada pelo autor.
Aqui, você aprendeu a consumir uma API de web services para consulta de informações referentes a códigos de endereçamento postal (CEP). No próximo bloco, você aprenderá outro tipo de API bastante utilizado: APIs de geolocalização. 
Até lá!

VIDEOAULA: CONSUMINDO DADOS DE APIS DE TERCEIROS I
Nesta aula, veremos como consumir uma API de terceiros para a consulta de endereços usando um CEP como entrada. 
Bons estudos!

Videoaula: Consumindo dados de APIs de terceiros I

 


CONSUMINDO DADOS DE APIS DE TERCEIROS II
Na atualidade, diversas empresas, como Google, Amazon e Microsoft, fornecem serviços nas nuvens para as mais variadas tarefas. Um exemplo é a plataforma Google Cloud, que fornece APIs de web service para tarefas como tradução automatizada de documentos, geolocalização e exibição de mapas interativos, processamento de linguagem natural, narração automatizada, gestão de bancos de dados nas nuvens, entre muitas outras soluções. Serviços como esses têm um grande potencial para empresas de todos os portes, podendo gerar vantagens em um mercado cada vez mais competitivo. 
Note que a maior parte desses serviços é paga, contudo, há muitas alternativas gratuitas e livres disponíveis na internet. Nesta segunda parte da aula de consultas a APIs de terceiros, veremos como consumir dados de outros tipos de API. Para esse exemplo, vamos utilizar o OpenLayers, uma biblioteca JavaScript gratuita e Open Source para criação de mapas dinâmicos em páginas web (disponível em: https://openlayers.org/). 
Nesse exemplo, você aprenderá como criar mapas interativos de maneira simplificada, consultar a API de geolocalização do navegador e integrar isso ao mapa gerado pelo OpenLayers para localização em tempo real. Isso tudo será feito a partir de HTML, CSS e JavaScript, mas antes, é preciso criar um arquivo HTML e carregar a biblioteca OpenLayers e os arquivos JS e os de estilo CSS dessa biblioteca. 
Observe o código a seguir:

Código 4 | Código Idex
index.html
<!DOCTYPE html>
<html>
  <head>
  <title>API MAPA</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="estilo.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/css/ol.css" type="text/css">
  <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js"></script>
</head>
<body>
  <div id="mapa"></div>
  <script src="script.js"></script>
</body>
</html>
Fonte: elaborado pelo autor.
Note que os arquivos externos foram incorporados nas linhas 7 e 8; além disso, criamos uma vazia para inserir o nosso mapa (linha 11). Para delimitar o tamanho do mapa, vamos criar um estilo para o id “mapa” dentro do arquivo “estilos.css”.

Código 5 | Estilo.css
estilo.css
#mapa{
   width: 400px;
   height: 400px;
}
Fonte: elaborado pelo autor.
Por fim, criaremos o script que fará o carregamento do mapa por meio da API do OpenLayers. Não se preocupe com os códigos a seguir, pois foram coletados da documentação do OpenLayers (disponível em: https://bit.ly/3K094jH). Vamos alterar apenas a linha 2, na qual definimos o nome da div que receberá o mapa, e a linha 9, na qual incluiremos as coordenadas de latitude e longitude que serão centralizadas no mapa:

Código 6 | script.js
script.js
var map = new ol.Map({
  target: 'mapa',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-45, -20]),
    zoom: 4
  })
});
Fonte: elaborado pelo autor.
Para esse exemplo, vamos utilizar as coordenadas -45º de longitude e -20º de latitude (que irá centralizar o mapa do Brasil). Observe o resultado na Figura 3:

Figura 3 | Mapa do Brasil exibido pelo OpenLayers

Fonte: elaborada pelo autor.
Nesse exemplo, apenas utilizamos uma biblioteca já pronta para exibir um mapa de uma região específica, entretanto, podemos combinar isso com uma característica dos navegadores modernos: geolocalização. 
O HTML5 introduziu uma API de geolocalização que permite a obtenção das posições de latitude e longitude do dispositivo (W3C, 2021). Para usá-la, basta analisar o objeto navigator.geolocation:

geo = navigator.geolocation
Por exemplo, para recuperar as coordenadas do local em que estamos atualmente, podemos usar o seguinte código:

Código 7 | Localização atual
// coleta a localização atual
navigator.geolocation.getCurrentPosition(position => {
 
    // coleta latitude e longitude
    const { latitude, longitude } = position.coords;
 
    // imprimindo valores
    console.log("Latitude:", latitude)
    console.log("Longitude:", longitude)
 
});
Fonte: elaborado pelo autor.
Em um primeiro acesso, o navegador irá requisitar autorização para exibir sua localização por uma questão de segurança. A API Geolocalization permite, aos navegadores, a localização física do usuário, mas por uma questão de segurança, isso só pode ser feito com permissão (FLANAGAN, 2011).

Figura 4 | Navegador requisitando acesso a sua localização

Fonte: elaborada pelo autor.
Ao permitir o acesso, o console exibe as localizações de latitude e longitude, e a depender do dispositivo usado, com uma precisão de localização magnífica:

Figura 5 | Dados de latitude e longitude

Fonte: elaborada pelo autor.
Podemos, agora, combinar a API de geolocalização do navegador com a biblioteca OpenLayers e plotar sua posição exata. Observe como ficaria nosso código:

Código 8 | Combinando o API de geolocalização do navegador com a biblioteca OpenLayers
// coleta a localização atual
navigator.geolocation.getCurrentPosition(position => {
 
    // coleta latitude e longitude
    const { latitude, longitude } = position.coords;
 
    // imprimindo mapa
    var map = new ol.Map({
        target: 'mapa',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 6  // aumente este número para aproximar
          })
    });
});
Fonte: elaborado pelo autor.
Aqui, combinamos o objeto navigator.geolocation com a biblioteca OpenLayers. Note que inserimos o código do OpenLayers (linhas 7 a 19) dentro da função getCurrentPosition (linha 2), e as únicas alterações que fizemos foram na linha 16, em que substituímos os valores pelas variáveis latitude e longitude, e 17, em que aumentamos o valor de zoom para 6.

Figura 6 | Mapa gerado com a localização real (nível de zoom 6)

Teste esse código em seu computador e veja que o mapa se aproxima da localização real. Use um nível de zoom de 20 e verá sua localização exata (a precisão depende do dispositivo usado).
Fonte: elaborada pelo autor.
Esses foram alguns exemplos que ilustram o consumo de APIs de web services usando JavaScript e HTML5. Note que, com poucos códigos JavaScript, é possível construir aplicações poderosas, como sistemas de buscas de CEP ou mapas interativos em tempo real, como os exemplos explorados nesta aula. Além disso, há muitas outras possibilidades, então, não se prenda a esses exemplos e explore outras APIs, entretanto, tome cuidado ao consumir APIs de terceiros em projetos reais, pois o funcionamento do seu sistema dependerá da disponibilidade da web service de terceiros, e depender disso pode ser um grande problema, pois, muitas vezes, esses serviços saem do ar sem aviso prévio.

VIDEOAULA: CONSUMINDO DADOS DE APIS DE TERCEIROS II
Nesta aula, você aprenderá a consumir uma API de mapas interativos usando a biblioteca OpenLayers.
Bons estudos!

Videoaula: Consumindo dados de APIs de terceiros II

 


ESTUDO DE CASO
Você está cada vez mais popular na Empresa A; no momento, você é o programador front-end mais requisitado pelos clientes. Continue trabalhando assim e, em breve, você poderá ser promovido a programador front-end pleno. 
A gerência incumbiu você de trabalhar nos requisitos enviados por um novo cliente: a empresa C, que é uma agência de viagens que opera pela internet. Atualmente, ela usa um sistema baseado na API do Google Maps (https://maps.google.com/) para exibir um mapa interativo dos locais mais requisitados por clientes, entretanto, o custo para usar a API do Google Maps ficou elevado devido ao aumento do dólar, uma vez que decidiram hospedar o site nos Estados Unidos. 
Por isso, a equipe decidiu reduzir custos utilizando um sistema open source: o OpenLayers, uma biblioteca JavaScript gratuita para criação de mapas dinâmicos em páginas web (disponível em https://openlayers.org/).
Construa uma página web que exiba um mapa interativo para os quatro principais destinos turísticos requisitados por clientes:

Quadro 2 | Destinos turísticos favoritos e suas coordenadas de latitude e longitude
Destino	Latitude	Longitude
Cancún, México	21.185825728408798	-86.85230016459138
Hawaii, EUA	21.308769168988754	-158.04524147166748
Arraial do Cabo, Brasil	-22.9877924209166	-42.01292851426791
Porto Segundo, Brasil	-16.40792362872437	-39.048106898973074
Fonte: elaborado pelo autor.
RESOLUÇÃO DO ESTUDO DE CASO
Para começarmos a desenvolver o nosso site, primeiro, precisamos importar a biblioteca do OpenLayers, que é composta por dois arquivos: css e js. Vamos, então, criar nosso arquivo HTML e CSS:

Código 9 | Arquivo HTML
index.html
<!doctype html>
<html>
<head>
    <title>Agência de turismo</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="estilo.css">
 
    <!-- biblioteca OpenLayers -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/css/ol.css" type="text/css">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js"></script>
 
</head>
<body>
    <h1>Destinos favoritos de clientes do turistando</h1>
 
    <div id="destinos">
        <div id="destino-1"></div>
        <div id="destino-2"></div>
        <div id="destino-3"></div>
        <div id="destino-4"></div>
    </div>
 
    <script src="script.js"></script>
 
</body>
</html>
Fonte: elaborado pelo autor.
Código 10 | Arquivo CSS
estilo.css
*{ margin: 0; }
h1{ text-align: center; }
 
#destino-1, #destino-2, #destino-3, #destino-4{
   width: 50%;
   height:300px;
   float:left;
}
Fonte: elaborado pelo autor.
Note que criamos quatro elementos nomeados de destino 1 a 4, respectivamente. Cada um desses elementos tem 300px de altura e ocupa 50% da página (linhas 4 a 8, arquivo estilo.css). 
Para armazenar os destinos, é possível criar um array e, dentro dele, um array para cada destino. Desta forma:

destinos = [ // array principal
    [ cidade 1, latitude, longitude ], // cada cidade
    [ cidade 2, latitude, longitude ], 
    [ cidade 3, latitude, longitude ], 
    [ cidade 4, latitude, longitude ]
]
Assim, para pegar cada cidade, bastaria usar um laço for e, em cada item, usar:

destinos[i][0] = nome da cidade.
destinos[i][1] = latitude.
destinos[i][2] = longitude.
Observe como podemos implementar esse código:

Código 11 | Código array
// array [local, latitude, longitude]
destinos = [
    [
        "Cancún, México",  
        21.185825728408798, 
        -86.85230016459138
    ], 
    [
        "Hawaii, EUA", 
        21.308769168988754, 
        -158.04524147166748
    ], 
    [
        "Arraial do Cabo, Brasil", 
        -22.9877924209166,  
        -42.01292851426791    
    ], 
    [
        "Porto Segundo, Brasil",   
        -16.40792362872437, 
        -39.048106898973074
    ] 
];
 
// laço de repetição para gerar mapas
for(i=0; i < destinos.length; i++){
    var map = new ol.Map({
        target: 'destino-'+(i+1),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([
                destinos[i][2],    
                destinos[i][1]
            ]),
            zoom: 11
        })
    });
}
Fonte: elaborado pelo autor.
Este é o resultado do nosso site: 

Figura 7 | Mapa interativo das quatro cidades

Fonte: elaborada pelo autor.
Resolução do Estudo de Caso

 


Saiba mais
O que é uma API? (YouTube – Canal TI)
Neste vídeo, você aprenderá mais sobre APIs.
Disponível em: https://bit.ly/3GhjnNT. Acesso em: 23 dez. 2021.
Introdução às Web APIs (MDN Web Docs)
Neste link, você aprenderá o que são, como funcionam e como usar APIs em seu código. 
Disponível em: https://mzl.la/3GkSDMs. Acesso em: 23 dez. 2021.

REFERÊNCIAS
2 minutos


Aula 1
DOM STANDARD. 2021. Disponível em: https://bit.ly/3zJJbjx. Acesso em: 17 dez. 2021. 
FLANAGAN, D. JavaScript: o guia definitivo. 6. ed. Porto Alegre: Bookman, 2011.
MARIANO, D.; MELO-MINARDI, R. de. Introdução à programação web para bioinformática: HTML, CSS, PHP and JavaScript. [S. l.]: Independently Published, 2017.

Aula 2
FULTON, S.; FULTON, J. HTML5 canvas: native interactivity and animation for the web. Newton: O’Reilly Media, 2011.
MDN WEB DOCS. Drawing text. [s. d.]. Disponível em: https://mzl.la/3r2HXMe. Acesso em: 17 dez. 2021. 
MDN WEB DOCS. Utilização básica do canvas. [s. d.]. Disponível em: https://mzl.la/3raUugO. Acesso em: 17 dez. 2021.

Aula 3
FLANAGAN, D. JavaScript: o guia definitivo. 6. ed. Porto Alegre: Bookman Editora, 2011. 
LECHETA, R. R. Node essencial. São Paulo: Novatec Editora, 2018. 
MDN Web Docs. Códigos de status de respostas HTTP. 2021. Disponível em: https://mzl.la/338AaEG. Acesso em: 5 dez. 2021.

Aula 4
BENTO, E. J. Desenvolvimento web com PHP e MySQL. São Paulo: Casa do Código, 2021. 
FLANAGAN, D. JavaScript: o guia definitivo. 6. ed. Porto Alegre: Bookman Editora, 2011. 
LECESSI, R. Functional interfaces in Java: fundamentals and examples. New York: Apress, 2019. 
W3C. Geolocation API. 2021. Disponível em: https://bit.ly/3FeAKxB. Acesso em: 23 dez. 2021. 
ZHIRKOV, I. Programação em baixo nível: C, assembly e execução de programas na arquitetura intel 64. São Paulo: Novatec Editora, 2018.

LINHAS 1806