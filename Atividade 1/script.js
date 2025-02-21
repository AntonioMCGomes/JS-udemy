function calcularIMC() {
    let nome = document.getElementById('inome');
    let peso = parseFloat(document.getElementById("ipeso").value);
    let altura = parseFloat(document.getElementById("ialtura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 16) {
        resultado += "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 16.99) {
        resultado += "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.49) {
        resultado += "Baixo peso";
    } else if (imc >= 18.50 && imc < 24.99) {
        resultado += "Peso adequado";
    } else if (imc >= 25 && imc < 29.99) {
        resultado += "Sobrepeso";
    } else if (imc >= 30 && imc < 34.99) {
        resultado += "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.99) {
        resultado += "Obesidade grau II";
    } else {
        resultado += "Obesidade grau III.";
    }

    document.getElementById("res").innerHTML = `Nome: ${nome.value}<br> Massa corporal: ${imc.toFixed(2)} <br> Classificão:  ${resultado}.`
    
}

/*`${nome.value} possui índice \n de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como:  ${resultado}.`*/    
   


















