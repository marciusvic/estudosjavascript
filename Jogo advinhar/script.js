
var randomNumber = parseInt(Math.random()* 11);
var tentativas =2;

console.log(randomNumber)

function Chutar(){
    tentativas--;
    var printTentativas = document.getElementById("tentativas")
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");

    printTentativas.innerHTML="Seu numero de tentativas é " + (tentativas+1)
    if(tentativas >= 0){
        if (chute == randomNumber){
            resultado.innerHTML = ""
            printTentativas.innerHTML = "Acertou"

        } 
        else if(chute > 10 || chute < 0){
            resultado.innerHTML = "Digite um número entre 0 e 10"
        }
        else{
            if(chute>randomNumber){
                resultado.innerHTML = "Errou, tente novamente! O Número Secreto é MENOR que " + chute;
            }
            else if(chute < randomNumber){
                resultado.innerHTML ="Errou, tente novamente! O Número Secreto é MAIOR que " + chute;
            }
        }
    }
    else if(tentativas<0){
        printTentativas.innerHTML = "Fim! Você perdeu suas tentativas! A resposta era " + randomNumber;
        resultado.innerHTML = ""
    }
}

