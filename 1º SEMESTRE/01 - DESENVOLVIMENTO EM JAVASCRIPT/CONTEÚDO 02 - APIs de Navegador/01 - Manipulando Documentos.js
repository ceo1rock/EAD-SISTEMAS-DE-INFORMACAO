APIs - Bibliotecas para desenvolvimento em JavaScript

Aula 1 - APIs de navegador – manipulando documentos






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
LINHA 448