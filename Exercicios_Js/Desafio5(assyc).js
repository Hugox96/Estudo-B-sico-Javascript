function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Dados retornados após um atraso de 1 segundo');
      }, 1000);
    });
  }
  
  asyncFunction()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
  