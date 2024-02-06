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
  
  Object.keys(livro).forEach(chave => {
    livro[chave] = livro[chave].toUpperCase();
  });
  
  console.log(livro);
  

  const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2019,
    quilometragem: 50000
  };
  
  const propriedadesNumericas = [];
  Object.entries(carro).forEach(([chave, valor]) => {
    if (typeof valor === 'number') {
      propriedadesNumericas.push(chave);
    }
  });
  
  console.log(propriedadesNumericas);
  