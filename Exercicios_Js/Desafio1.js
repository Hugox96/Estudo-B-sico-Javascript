function encontreDiferenca(arr1, arr2) {
  var diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  return diff;
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
var diferenca = encontreDiferenca(array1, array2);
console.log(diferenca);