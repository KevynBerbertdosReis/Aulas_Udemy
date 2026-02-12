// ?:
// ? depois da interrogação o codigo 
// avalia como verdadeiro, 
// : depois dos dois pontos o codigo
// avalia como falso

const pontoUsuario = 800;
const levelUser = pontoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal'

const corUser = 'Red';
const corPadrao = corUser || 'Blue';
console.log(levelUser, corPadrao);