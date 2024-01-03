const produto = new Object();
produto.nome = "Cadeira";
produto.marca = "Generica";
produto.preco = 220;

// Criando propriedades dinamicamente usando um loop
for (let i = 1; i <= 3; i++) {
    produto[`caracteristica${i}`] = `Valor ${i}`;
}

console.log(produto);
