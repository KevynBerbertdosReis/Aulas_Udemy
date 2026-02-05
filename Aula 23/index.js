/* if e else */
// Estrutura condicional
//if pode ser usado sozinho
//Sempre o else deve estar ligado a um if
//else if pode ser aplicado quantas vezes forem necessárias
//else if precisa estar entre o if e o else e precisa ter um if antes
//podemos omitir o else if e usar apenas duas condições if e else

const hora = 30;
if (hora >=1 && hora <=12){
    console.log("Bom dia!");
}
else if (hora >= 12 && hora < 18){
console.log("Boa tarde!");
}
else if (hora > 18 && hora <=24){
    console.log("Boa noite!");
}
else {
    console.log("Hora incorreta!");
}

const money = false
if (money) {
    console.log("Vou sair de casa");
}
else{
    console.log("Não vou sair de casa");
}

const tenhoDinheiro = true;
if (tenhoDinheiro) {
    console.log("vou sair de casa");
}