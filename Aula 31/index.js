const pessoa = {
nome: "João",
idade: 25,
endereco: {
rua: "Rua das Flores",
numero: 123,
cidade: "São Paulo"}
};

const { endereco: {cidade}} = pessoa;
console.log(cidade)