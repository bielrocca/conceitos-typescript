namespace casting { // Pasta virtual para guardar variaveis com nomenclatura iguais
    let idade: any = 25;
    (idade as number).toFixed(); // tratar essa variavel como (as) um numero (number)
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x)
    })

    let nome: string = 35 as unknown as string // Conversão de atributos
}