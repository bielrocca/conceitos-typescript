"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Back-end", "Infraestrutura"],
        idade: 27,
    },
    {
        nome: "Antonio",
        cursos: ["Front-end", "Terraform"],
        idade: 25,
    }
];
alunos.push({
    nome: "Jorge",
    cursos: ["Python"],
    idade: 29,
});
const novoAluno = {
    nome: 'Lucas',
    idade: 30,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
