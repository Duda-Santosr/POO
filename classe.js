// Criando classe aluno
class Aluno{
    constructor(nome, idade){
        // O constructor é um método tradicional
        this.nome= nome;
        this.idade= idade;
    }
    estudar = () => console.log(`${this.nome} está estudando.`)
}

const duda = new Aluno("Duda", 16)
console.log(duda.nome)

// novo objeto
const ana = new Aluno ("Ana", 17)
console.log(ana.nome)
ana.estudar()