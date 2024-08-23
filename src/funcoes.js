"use strict";
// -------------Tipagens em Funções------------
function calculaArea(base, altura) {
    return base * altura;
}
const resultadoDaArea = calculaArea(5, 5);
console.log(resultadoDaArea);
const calculaArea2 = (base, altura) => base * altura;
function multiplicar(...numeros) {
    // numeros.reduce()
}
function teste() {
    if (10 > 5) {
        return 'dez é maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
console.log(resultadoDeTeste);
