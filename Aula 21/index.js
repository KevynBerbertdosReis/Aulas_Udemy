/*operadores logicos
&& -> AND -> E -> todas as expressôes precisam ser verdadeiras para retornar true
|| -> OR -> OU -> todas as expressões precisam ser falsos para retornar false
! -> NOT -> NÃO -> ele nega uma expressão, invertendo o seu valor
*/

const expressaoAnd = true && true && false; 
const expressaoOr =  false || false || false || false;

const user = 'Luiz';
const password = '45689';
const validation = user === 'Luiz' && password === '45659';
console.log(!false) 