Aula 3 - APIS de navegador – comunicando com o servidor

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
