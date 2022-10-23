const calcular = document.querySelector("#calcular");


function imc(){
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const resultado = document.querySelector("#resultado");

    if (nome !== "" && altura !== "" && peso !== "") {
        const valorIMC = (peso/(altura*altura)).toFixed(1);
        
        let classficacao = "";

        if (valorIMC < 17){
            classficacao = "muito abaixo do peso"
        }else if (valorIMC <= 18.49) {
            classficacao = "abaixo do peso"
        }else if (valorIMC <= 24.99) {
            classficacao = "com o peso ideal"
        }else if (valorIMC <= 29.99) {
            classficacao = "acima do peso"
        }else if (valorIMC <= 34.99) {
            classficacao = "com obesidade |"
        }else if (valorIMC <= 39.99) {
            classficacao = "com obesidade ||"
        }else if (valorIMC >= 40) {
            classficacao = "com obesidade |||"
        }


        resultado.textContent = `${nome}, seu IMC é de ${valorIMC}, você está ${classficacao}.`

    }else {
        resultado.textContent = "Preencha todos os capos"
    }
}

calcular.addEventListener("click", imc);
