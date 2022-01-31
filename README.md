# Estudo-Basico-Javascript

A ideia deste repositório é documentar meus avanços nos estudos básicos da linguagem javascript, com o intuito de aprimorar minhas habilidades e desenvolver melhores projetos futuramente. Para isso irei colocar neste readme alguns exercicios que considero interessantes para o aprendizado. 

O 1º Exercicio é criando uma interação com o Html e Javascript por meio de funções, então vamos a ele.

## Interação com a página Html

A ideia deste exercicio é criar uma interação com a página do Html com a parte do Javascript por meio de um botão que chama uma função. Vamos ver como o resultado ficou e explicar os trechos mais importantes.

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
  
   





