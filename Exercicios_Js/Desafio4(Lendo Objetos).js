// const personagem ={
//     nome: "Naruto",
//     poder: "Rasengam",
//     cargo: "Hokage"
// };

// Object.entries(personagem).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);

// });


//************************************************************************* 2º exercicio ***********************************************************//
const livro = {
    titulo: 'A Menina que Roubava Livros',
    autor: 'Markus Zusak',
    genero: 'Ficção'
  };
  
  //Neste exemplo ele percorre cada chave e transformar os textos em maiuscula
  Object.keys(livro).forEach(chave => {
    livro[chave] = livro[chave].toUpperCase();
  });
  
  console.log(livro);
  
//************************************************************************* 3º exercicio ***********************************************************//


  const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2019,
    quilometragem: 50000
  };
  
  //aqui ele cria uma lista vazia que será adicionada dps dentro do for
  const propriedadesNumericas = [];
  Object.entries(carro).forEach(([chave, valor]) => {
    // dentro do forEach ele avalia o tipo de cada propriedade e caso se for numero, realiza um push
    if (typeof valor === 'number') {
      propriedadesNumericas.push(chave);
    }
  });
  
  console.log(propriedadesNumericas);
  