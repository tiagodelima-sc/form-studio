var num1 = document.querySelector("#n1");
var num2 = document.querySelector("#n2");
var num3 = document.querySelector("#n3");
var num4 = document.querySelector("#n4");
var num5 = document.querySelector("#n5");
var num6 = document.querySelector("#n6");
var resultado = document.querySelector(".resultado");

function somar() {
  if (
    !num1.value ||
    !num2.value ||
    !num3.value ||
    !num4.value ||
    !num5.value ||
    !num6.value
  ) {
    alert("Por favor, preencha todo os campos!");
  } else {
    resultadoWhats = num1.value * 164.9;
    resultadoAPI = num2.value * 76.9;
    resultadoCampanha = num3.value * 109.9;
    resultadoChatInterno = num4.value * 43.9;
    resultadoUsuarios = num5.value * 54.9;
    resultadoChatBot = num6.value * 76.9;

    resultadoTotal =
      parseFloat(resultadoWhats) +
      parseFloat(resultadoAPI) +
      parseFloat(resultadoCampanha) +
      parseFloat(resultadoChatInterno) +
      parseFloat(resultadoUsuarios) +
      parseFloat(resultadoChatBot);

    resultado.innerHTML = "R$ " + resultadoTotal.toFixed(2) + " / mês";
    document.getElementById("buttonFree").style.display = "block";
    document.getElementById("returnHome").style.display = "block";
  }
}
