# Estudo- Javascript

A ideia deste repositório é documentar meus avanços nos estudos básicos da linguagem javascript, com o intuito de aprimorar minhas habilidades e desenvolver melhores projetos futuramente. Para isso irei colocar neste readme alguns exercicios que considero interessantes para o aprendizado. 

O 1º Exercicio é criando uma interação com o Html e Javascript por meio de funções, então vamos a ele.

## Interação com a página Html

A ideia deste exercicio é criar uma interação com a página do Html com a parte do Javascript por meio de um botão que chama uma função. Vamos ver como o resultado final é e explicarei os trechos mais importantes abaixo.

![Alt Text](https://user-images.githubusercontent.com/62472486/151851572-e5d1ee70-3189-4812-bfa9-2e84cc3f9210.gif)

Primeiro entendendo a estrutura da página, é bem simples mais importante para entender os próximos exercicios. 

A parte visual do Html fica dentro da tag <body> e com ela criamos o botão e o título da página. Vamos ver o código abaixo:
   
         <!--Parte visual do exercicio -->
          <style>
             body{font: 12pt}
             button{font-size: 12pt; padding: 30px} 
         </style>
         <!-- Mensagem na pagina-->
         <h1> Interagindo com a página </h1>
         <button onclick="Inicio()"> Clique Aqui </button> <!-- Inicializando a função-->
         <!-- Com essa id podemos substituir mais tarde-->
         <section id="Mensagem">
           <p> A mensagem abaixo será substituida</p>
        </section>
  
  E temos esse resultado:
   
  <p align="center">
  <img width="400" height="200" src= "https://user-images.githubusercontent.com/62472486/151853036-bee2406a-327a-4227-8f57-f5ae070aedaa.png">
  </p>
   
   Depois temos a parte mais importante, na tag <b> button onclick </b> iremos chamar uma função que será criada para substituir a mensagem na tela inicial com    a interação do usuário.  Para isso vamos criar a função no <script>, onde a parte lógica entra, como no código abaixo:
   
    <script>
        function Inicio(){
            let nome = window.prompt("Qual seu nome"); // Recebe o nome da variável
            let res = window.document.getElementById("Mensagem") //Pegando o id  mensagem para editar 
            res.innerHTML = `<p> Ola, ${nome}. Bem vindo a pagina!` //Substituindo a mensagem pela variavel nome
            }
    </script>
   
   Então temos 3 coisas importantes:
   
   1º Temos a variável <b> let nome </b> que irá receber a resposta do usuário. <br>
   2º O <b> getElementById </b> que pega o Id(Mensagem) que foi criado e a modifica com uma nova mensagem. <br>
   3º Finalizar temos o <b> res.innerHtml </b >que substituiu a mensagem do Id para a nova mensagem com o nome do usuário.
   
   
   





