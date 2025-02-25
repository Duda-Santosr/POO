// Criando classe aluno
class Aluno{
    constructor(nome, idade){
        // O constructor é um método tradicional
        this.nome= nome;
        this.idade= idade;
    }
    estudar = () => console.log(`${this.nome} está estudando.`)
    feliz = () => console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos, e estou feliz.`)
}

const duda = new Aluno("Duda", 16)
console.log(duda.nome);

// novo objeto
const ana = new Aluno ("Ana", 16)
console.log(ana.nome)
ana.estudar();

// novo objeto com nome e idade
const isabela = new Aluno("Isabela", 17)
console.log(isabela.nome)
console.log(isabela.idade)

// novo objeto nome, idade e frase
const yasmin = new Aluno("Yasmin", 17)
console.log(yasmin.nome)
console.log(yasmin.idade)
yasmin.feliz();

