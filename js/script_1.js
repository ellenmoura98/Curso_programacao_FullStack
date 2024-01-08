document.addEventListener("DOMContentLoaded", function () {
  var resultado = 2 + 2;
  alert(`O resultado de 2 + 2 é: ${resultado}`);

  document.getElementById(
    "resultado"
  ).textContent = `Foi exibido no alert o resultado de 2 + 2: ${resultado} `;
});
