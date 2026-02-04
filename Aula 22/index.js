/*
&& -> false && true false "o valor mesmo"
|| -> true || false vai retornar "o valor verdadeiro" o primeiro que encontrar
! -> !true
*/

/*
Falsy valores falsos
false
0
'' "" ``
null / undefined
NaN
*/

const corUser = 'blue';
const corPadrao = corUser || 'preto';
console.log(corPadrao);