function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let result = document.getElementById("resultado")

    result.innerHTML = (`IMC ${calcImc(peso, altura).toFixed(2)}`);

    if (peso / (altura * altura) < 18.5) {
        window.alert("Classificação: abaixo do peso!");
    }
    else if (peso / (altura * altura) >= 18.5 && peso / (altura * altura) < 24.9) {
        window.alert("Classificação: Peso normal!");
    }
    else if (peso / (altura * altura) >= 24.9 && peso / (altura * altura) < 29.9) {
        window.alert("Classificação: Sobrepeso!");
    }
    else {
        peso / (altura * altura) > 29.9
        window.alert("Classificação: Obesidade!");
    }
}

function calcImc(peso, altura) {
    return peso / (altura * altura);
}




