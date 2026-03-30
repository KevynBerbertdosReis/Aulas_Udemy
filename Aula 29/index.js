// let a = 'A'; //b
// let b = 'B'; //c
// let c = 'C'; //a

// const leter = [b, c, a];
// [a,b,c] = leter;

// console.log(a, b, c);

//rest or spread ou resto
            //   0  1  2  3  4  5  6  7  8   9
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [,dois, , , cinco, ,sete] = numeros;

// console.log(dois, cinco, sete);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[0]);
