# :robot:  The Mars Exploration Program

> "[...] the question of whether Machines Can Think [...] is about as relevant as the question of whether Submarines Can Swim."
> 
> Edsger Dijkstra,  *The Threats to Computing Science*

<div  align="center">

  <img alt="space-probe" src=".github/space-probe.png" width="400" height="250">

</div>

<br>

## :space_invader: Regras do Desafio

<p align="justify">
Um conjunto de sondas foi enviado pela NASA a um planalto retangular do planeta Marte. Este planalto deve ser explorado pelas sondas para que suas câmeras embutidas consigam registrar uma visão completa da área demarcada e enviar as imagens de volta para a Terra. Para controlar as sondas, a NASA envia uma sequência de letras dentre as possíveis: L, R, M e P. Destas, L e R fazem a sonda virar 90 graus para a esquerda ou direita, respectivamente, sem mover a sonda. A letra M faz com que a sonda mova-se um ponto da malha para frente, mantendo a mesma direção. A letra P aciona a câmera para fotografar a planície exatamente na posição em que a sonda está apontada. Foi solicitado, então, a construção de um programa para processar a série de informações de comando que as sondas recebem da NASA para a exploração de Marte.
</p>

### Entrada dos dados

- A entrada de dados poderia ser por Interface de Linha de Comando (CLI) ou por arquivo.
- A primeira linha da entrada de dados seria a coordenada do ponto superior-direito da malha do planalto.
- O resto da entrada seriam as informações das sondas que foram implantadas. Cada sonda seria representada por duas linhas, sendo a primeira indicando sua posição inicial e a segunda uma série de instruções indicando como a sonda deveria explorar o planalto.

#### Exemplo:
5 5<br>
1 2 N<br>
LMLMLMLMMPP<br>
3 3 E<br>
MMRMMRPRRM<br>

### Saída dos dados

- A saída de dados poderia ser por CLI ou por arquivo.
- Deveria conter uma linha para cada sonda, na mesma ordem de entrada, representando sua localização final e direção. 

#### Exemplo:
1 3 N<br>
5 1 E<br>

<p align="justify">
A aplicação deveria ser feita com a linguagem de programação de preferência do candidato e sem a utilização de frameworks. Testes e validações foram permitidos. Para a realização desta aplicação, a linguagem escolhida foi JavaScript, bem como o framework de testes Jest para a realização dos testes unitários.
</p>

<p align="justify">
Como nas regras do desafio não fora estabelecido um formato de saída para as imagens registradas pelas câmeras das sondas, armazenei os dados referentes a um array chamado **prints**, onde em seu terminal você poderá conferir com o comando:
</p>

```

console.log(prints)

```

## :alien: O Desafio

### O primeiro contato

<p align="justify">
Grande parte da realização desse desafio foi dedicada ao entendimento do problema apresentado. Após a compreensão inicial, foi relativamente simples estabelecer uma primeira sequência lógica das informações:
</p>

 ⇨ obter os dados de entrada<br>
 ⇨ limitar o espaço de exploração com a coordenada do canto superior-direito<br>
 ⇨ apontar a sonda para uma direção<br>
 ⇨ andar com a sonda movida para direção apontada<br>
 ⇨ registrar a coordenada e direção para qual a sonda aponta<br>
 ⇨ inserir os dados finais na saída<br>

### Primeira versão

<p align="justify">
Na primeira versão da aplicação, o formato de entrada de dados escolhido foi através da Interface de Linhas de Comando (CLI), onde o usuário deveria inserir suas respostas para as perguntas apresentadas no terminal. As respostas dessas solicitações de dados eram armazenadas em um array e a partir dele os dados eram manipulados para seguir todo o percurso da lógica.
</p>

<p align="justify">
Ao longo do desenvolvimento dessa primeira versão já era possível detectar algumas problemáticas: a inserção de dados da forma como fora estabelecida só aceitava os dados de apenas uma sonda; o código estava muito confuso e nada performático, com apenas um método sendo responsável por múltiplas tarefas; não possuía um formato de saída satisfatório.
</p>

<p align="justify">
Apesar de eu conseguir identificar que algo estava errado no código, tive dificuldades em encontrar exatamente o que e em melhorá-lo. Para isso, dei início as minhas pesquisas sobre refatoração e performance de código. Li muitos tópicos sobre Design Patterns (destaque para Strategy e Factory Method), assuntos esses que foram novidades para mim. Também consumi muitos vídeos e fóruns sobre o assunto. Após essa pesquisa, pensei em algumas ideias para melhorar a apresentação do código, bem como sua performance. Para isso, dei início a construção da segunda versão da aplicação.
</p>

### Segunda versão

<p align="justify">
Além das problemáticas sobre a entrada de dados citadas anteriormente, também era muito complicado para testar e retestar o código, já que requeria que eu inserisse a todo momento os dados solicitados (coordenada superior-direito, coordenada inicial e comandos) no terminal. Portanto, decidi alterar o formato de entrada de dados de CLI para entrada através de arquivo. Isso facilitou particularmente o meu trabalho, já que não tinha mais a necessidade de a todo momento inserir os dados manualmente, bem como solucionava a outra problemática, facilitando a inserção de dados de quantas sondas fossem necessárias. Também resolvia o formato de saída dos dados, sendo satisfatório e de acordo com o requerido no desafio.
</p>

<p align="justify">
Logo após, dei início a refatoração do código, tentando ao máximo separar cada função, dispondo cada método com única funcionalidade. Busquei melhorar também o "for statement" usado no movimento da sonda na Primeira Versão, alterando para "switch statement" na Segunda Versão. O código resultado está muito mais conciso e organizado, facilitando a manutenção e melhorando sua performance. 
</p>
  
### Testes unitários

<p align="justify">
A cada alteração no meu código eu precisava verificar se a lógica do meu programa estava correta, me questionando a todo momento: A sonda está girando para o lado certo? Está saindo do limite do planalto retangular? Está se movendo no eixo certo? E era de certa forma exaustivo, já que eu precisava aplicar todos os testes manualmente, tendo que recorrer a esquemas e contas no papel. Encontrei erros de lógica que eu pensava estarem certos, mesmo que eu tenha verificado diversas vezes. Desse modo, comecei a pensar de que forma eu poderia automatizar todo esse trabalho manual e testar o meu código recorrentes vezes. Dei início então a outras pesquisas e encontrei o Jest, uma estrutura de testes de JavaScript.
</p>

<p align="justify">
Embora não tenha sido solicitado testes nesse desafio, resolvi aplicar os testes unitários utilizando o Jest como uma forma de estudo. Por mais que anteriormente nunca tenha realizado testes em aplicações, seguindo a documentação consegui escrever, aplicar e interpretar os testes de meu programa. De imediato percebi a importância de testar os códigos, pois logo consegui identificar erros de lógica e escrita no código, o que estavam causando uma série de erros na movimentação da sonda.
</p>

### O fim

<p align="justify">
Com o código escrito e testado, finalizei o desenvolvimento da aplicação. Foi uma experiência muito divertida e única, pois foi muito além de apenas desenvolver uma solução para um desafio. Foi um objeto de estudo, onde fui de encontro a assuntos e ferramentas novas, que agregaram muito ao meu conhecimento. 
</p>

<p align="justify">
Agora teste você mesmo a aplicação e se divirta levando as suas próprias sondas para uma exploração em Marte! 🚀🤖
</p>

> Is there life on Mars?

## :boom: Tecnologias utilizadas
  
* JavaScript

* Node.js

* Jest 

## :cat: Getting Started

Para rodar essa aplicação em sua máquina, você precisa ter uma IDE e o Node.js instalados. Com ambos instalados e preparados, em seu terminal, execute:

  

```shell

npm install

```

Após a instalação das dependências, para rodar a aplicação e observar a saída final do arquivo na pasta "outputs", execute o seguinte comando:

  

```shell

node .

```

  

Para a execução dos testes, execute:

  

```shell

jest

```

  

Pronto! Você conseguiu rodar a aplicação.
 

## :fire: Task list

-  [x] Pegar os dados inseridos por arquivo

-  [x] Limitar o planalto retangular com o valor do superior direito

-  [x] Apontar a sonda para uma direção

-  [x] Andar com a sonda para a direção apontada

-  [x] Tirar foto na coordenada e direção apontada

-  [x] Inserir os dados de saída no arquivo

####  Adicionais

-  [x] Implementação de testes unitários
