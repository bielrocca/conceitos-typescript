// ------------------------------------- Boolean

let estaChovendo: boolean = false

estaChovendo = true

// ------------------------------------- Number

let idade: number = 27

let altura: number = 1.75

// ------------------------------------- String

const nacionalidade: string = 'brasileiro'

// ------------------------------------- Arrays

const lover: string[] = ['Gabriel', 'Vitória'] // Somente string
const tecnologia: Array<string> = ['html', 'css', 'javascript'] // Segundo modo para indicar um array somente de string
const nota: ReadonlyArray<number> = [7, 9, 3, 10] // Array de leitura, ou seja, nao é modificavel

// Array Tupla

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Gabriel', true, 20]

let minhaIdade: number | string = 20
minhaIdade = '20 anos'

// Array Any

let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi
dadosDaApi = [1, 2, 3]
dadosDaApi = 'string'