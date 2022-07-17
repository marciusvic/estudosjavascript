function Converter(){
    var valorElemento = document.getElementById("valor").value; /*pega o elemento do input html e o trasforma em valor*/
    /*var valor = valorElemento.value; /* passa o valor elemento pra outra variável */
    var valorNumerico = parseFloat(valorElemento); /* tranforma o valor da variavel "valor" em float */
    var valorEmReal = valorNumerico*5;
    console.log(valorEmReal);

    var elementoValorConvertido =  document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}
