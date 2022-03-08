function Converter() {
    var valor = document.getElementById("valor").value;
    var valorDolar = parseFloat(valor);
    var valorReal = valorDolar * 5;
    locValorConvertido = document.getElementById("valorConvertido");
    resultadoConvertido = "O resultado da conversão foi de R$" + valorReal;
    locValorConvertido.innerHTML = resultadoConvertido;
  }
