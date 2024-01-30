Aula 4 - Trabalhando com APIs de terceiros
48 minutos
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