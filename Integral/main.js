

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        var expressionInput = document.getElementById('expression');
        var resultDiv = document.getElementById('result');
        var expression = expressionInput.value;
        console.log("oi", expression)

        // Resto do seu código de cálculo de integral aqui...
         // Tente calcular a integral
         try {
            console.log("estou no try")
            const nerdamer = require('nerdamer/all');
            var integral = nerdamer.solverEquations(expression, 'x');
            console.log(integral.toString())

            // Exiba o resultado como uma string
            resultDiv.textContent = 'Resultado: ' + integral.toString();
        } catch (error) {
            console.log("estou no catch")
            resultDiv.textContent = 'Não foi possível calcular a integral.';
        }
    });
});




























