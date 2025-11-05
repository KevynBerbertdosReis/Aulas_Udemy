const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numerotitulo');
const textCode = document.getElementById('texto');
const raizText = document.getElementById('raiz2');
const raizQuad = Math.sqrt(numero);
const intText = document.getElementById('numberInt');
const roundUp = document.getElementById('roudingUp');
const roundDown = document.getElementById('roundingDown');
const numberDec = document.getElementById('casaDec');


numeroTitulo.innerHTML = numero;
textCode.innerHTML = `O número informado foi: ${numero}`;
raizText.innerHTML = `A raiz quadrada de ${numero} é: ${raizQuad.toFixed(2)}`;
intText.innerHTML = `${numero} é inteiro: ${Number.isInteger(numero)}`;
roundUp.innerHTML = `${numero} arredondado para cima é: ${Math.ceil(numero)}`;
roundDown.innerHTML = `${numero} arredondado para baixo é: ${Math.floor(numero)}`;
numberDec.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`;
