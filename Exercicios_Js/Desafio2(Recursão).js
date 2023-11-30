function somaRecursiva(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + somaRecursiva(n - 2);
  }
}

var resultado = somaRecursiva(5);
console.log(resultado);
