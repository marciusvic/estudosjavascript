function insert(num){
    var numero = document.getElementById('main-result').innerHTML;
    document.getElementById('main-result').innerHTML = numero + num;
}

function clean(){
    document.getElementById('main-result').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('main-result').innerHTML;
    document.getElementById('main-result').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){

    resultado = document.getElementById('main-result').innerHTML;
    if(resultado){
        document.getElementById('main-result').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('main-result').innerHTML = "error 404";
    }
}