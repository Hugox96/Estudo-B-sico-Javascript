// const personagem ={
//     nome: "Naruto",
//     poder: "Rasengam",
//     cargo: "Hokage"
// };

// Object.entries(personagem).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);

// });

const livro = {
    titulo: 'A Menina que Roubava Livros',
    autor: 'Markus Zusak',
    genero: 'Ficção'
  };
  
  Object.keys(livro).forEach(chave => {
    livro[chave] = livro[chave].toUpperCase();
  });
  
  console.log(livro);
  