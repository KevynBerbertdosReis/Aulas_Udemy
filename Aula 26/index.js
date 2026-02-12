/*const data = new Date(1);
console.log(data.toString());*/
const data = new Date('2026-02-12 19:01:24:100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
console.log(data.toString());