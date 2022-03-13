var valorConvertido = document.getElementById("valorConvertido")

function Converter() {
    var valorEmReal = document.getElementById("valor").value;
    var valorReal = parseFloat(valorEmReal);
    var dolar = valorReal * 0.20;
    var euro = valorReal * 0.18;
    var btc = valorReal * 0.0000051;
    
    var listaMoedas = document.getElementById("menuMoedas");
    var moeda = listaMoedas.options[listaMoedas.selectedIndex].value;

    if (moeda == "nan") {
      valorConvertido.innerHTML = ("Escolha uma moeda para conversão.");
    }
    if (moeda == "dolar" ) {
    valorConvertido.innerHTML = ("Olá, o valor de sua conversão foi de U$" + dolar);
  } else if (moeda == "euro") {
    valorConvertido.innerHTML = ("Olá, o valor de sua conversão foi de €" + euro);
  } else if (moeda == "btc") {
    valorConvertido.innerHTML = ("Olá, o valor de sua conversão foi de BTC " + btc);
  }
}
