// -------------Tipagens em Funções------------

function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const resultadoDaArea = calculaArea(5, 5)
console.log(resultadoDaArea)

const calculaArea2 = (base: number, altura: number): number => base * altura

function multiplicar(...numeros: number[]): void {
    // numeros.reduce()
}


function teste(): string | number {
    if(10 > 5) {
        return 'dez é maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()
console.log(resultadoDeTeste)