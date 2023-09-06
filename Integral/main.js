

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        var expressionInput = document.getElementById('expression');
        var resultDiv = document.getElementById('result');
        var expression = expressionInput.value;
        console.log(expression)

        // Resto do seu código de cálculo de integral aqui...
         // Tente calcular a integral
         try {
            const nerdamer = require('nerdamer/all');
            var integral = nerdamer.integrate(expression, 'x');

            // Exiba o resultado como uma string
            resultDiv.textContent = 'Resultado: ' + integral.toString();
        } catch (error) {
            resultDiv.textContent = 'Não foi possível calcular a integral.';
        }
    });
});




























