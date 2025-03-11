//EXERCICIO DE CONST E LET

const nome = 'João';
const sobrenome = 'Silva';
const idade = 27;
const peso = 83;
const altura = 1.70;

let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
