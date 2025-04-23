let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA; // 'A'

varA = varB; // 'B'
varB = varC; // 'C'
varC = varATemp; // 'A'
console.log(varA, varB, varC);