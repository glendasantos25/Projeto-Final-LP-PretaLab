function somar() {
  const numero1Soma = parseFloat(document.getElementById("numero1Soma").value);
  const numero2Soma = parseFloat(document.getElementById("numero2Soma").value);
  // evite mexer no código acima!

  const resultadoSoma = numero1Soma + numero2Soma;

  /* use as constantes numero 1 e numero 2 e em seguida armazene na variavel a operação descrita no nome da função.
    Em seguida, ao invés de mostrar o numero 10, mostre o resultado da operação */
  document.getElementById("resultadoSoma").innerHTML = resultadoSoma;
}

function subtrair() {
  const numero1Sub = parseFloat(document.getElementById("numero1Sub").value);
  const numero2Sub = parseFloat(document.getElementById("numero2Sub").value);
  // evite mexer no código acima!

  const resultadoSub = numero1Sub - numero2Sub;

  /* use as constantes numero 1 e numero 2 e em seguida armazene na variavel a operação descrita no nome da função.
     Em seguida, ao invés de mostrar o numero 9, mostre o resultado da operação */
  document.getElementById("resultadoSub").innerHTML = resultadoSub;
}

function multiplicar() {
  const numero1Mult = parseFloat(document.getElementById("numero1Mult").value);
  const numero2Mult = parseFloat(document.getElementById("numero2Mult").value);
  // evite mexer no código acima!

  const resultadoMult = numero1Mult * numero2Mult;

  /* use as constantes numero 1 e numero 2 e em seguida armazene na variavel a operação descrita no nome da função.
     Em seguida, ao invés de mostrar o numero 5, mostre o resultado da operação */
  document.getElementById("resultadoMult").innerHTML = resultadoMult;
}

function dividir() {
  const numero1Div = parseFloat(document.getElementById("numero1Div").value);
  const numero2Div = parseFloat(document.getElementById("numero2Div").value);
  // evite mexer no código acima!

  const resultadoDiv = numero1Div / numero2Div;

  /* use as constantes numero 1 e numero 2 e em seguida armazene na variavel a operação descrita no nome da função.
     Em seguida, ao invés de mostrar o numero -89, mostre o resultado da operação */
  document.getElementById("resultadoDiv").innerHTML = resultadoDiv;
}