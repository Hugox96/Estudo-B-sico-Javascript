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
   
   ## Criando uma Tabuada em Javascript e Html
   
   O próximo código em javascript que considero interessante é a tabuada. Nele podemos treinar a integração com o Html e Javacript além de utilizar a estrutura    for para realizar o cálculo.
   
   Vamos ver como fica o resultado final e explicar o código a seguir:
   
     
   ![tabuada](https://user-images.githubusercontent.com/62472486/164797410-49b90f10-e295-406d-9e93-87ee5177847d.gif)
   
   A criação é bem simples, só precisamos de um texto, um input e um botão para chamar a função que realiza o cálculo:
   
      <h1>Tabuada de qualquer número: </h1>
           <input id="numero" type="number"> 
           <button onclick="tabuada()">Exibir</button>
           <button onclick="limpar()">Limpar</button>
      <p>Tabuada:</p>

       <section id="resultado" style='display:inline'>
           <p> O resultado aparecerá aqui </p>
       </section>

   Na parte do scritp é só utilizar o for para realizar o cálculo dos números de 1 a 10, ou qualquer outro intervalo que escolher.
   
         <script>
              function tabuada(){
                  //transforma o valor no input em um inteiro e depois atribui o valor na variavel num
                  let num = parseInt(document.getElementById("numero").value);

                  // Pega o id resultado para ser mostrada na tela          
                  let resultado = document.getElementById("resultado");
                  let tabuada = ""; // tabuada é vazia pois irá receber os resultados
                   
                  // realiza o cálculo multiplicando o valor de 1 a 10, sendo i++ a iteração de i somando de 1 a 1 
                  for( let i=1; i<=10; i++){
                      tabuada += num+ " X " +i+ "=" + // A estrutura do código que aparece na tela
                       num*i+ "<br>"; // logica do calculo
                       resultado.innerHTML = tabuada; // pega o id resultado para mostrar na tela
                  }
              }

              function limpar(){document.getElementById("numero").value = "";} // limpa o input
        </script>
            

## Calculando a idade de votar com if and else
            
Nesse próximo código criei uma página que diz ao usuário o status do voto de acordo com a idade. De bem simples, é só colocar a idade que a mensagem aparece na tela.

Para criar o código em javascript utilizei os condicionais <b> If and Else </b>. Vamos ver como funciona abaixo:

![20220422_200824](https://user-images.githubusercontent.com/62472486/164860982-1a000c5d-fd1d-4a10-b929-5b15689f03f0.gif)
         
   

   
   
   
   
   





