

function retornarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

const numeros=[2, 4, 3, 1, 6, 7, 9];
const pares= retornarPares(numeros);
console.log(pares);
