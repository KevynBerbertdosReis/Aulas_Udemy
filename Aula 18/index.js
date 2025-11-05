//{} -> objeto
//[] -> array
//                          parametro
function criarPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade}
}

const pessoa = criarPessoa('Luiz', 'Otávio', 30); //-> argumento
console.log(pessoa);