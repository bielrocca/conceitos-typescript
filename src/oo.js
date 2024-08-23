"use strict";
// • público: padrão, acessível na classe, nas herdeiras e na instância; ----- public
// • privado: acessível apenas na classe;                                ----- private
// • estático: acessível na classe;                                      ----- static
// • protegido: acessível na classe e nas herdeiras.                     ----- protected
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();
