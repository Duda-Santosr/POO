// Criando classe aluno
class Aluno{
    #nota
    constructor(nome, idade, nota){
        // O constructor é um método tradicional
        this.nome= nome;
        this.idade= idade;
        this.#nota = nota;
    }
    estudar = () => console.log(`${this.nome} está estudando.`)
    tudo = () => console.log(`A aluna chama ${this.nome} e tem ${this.idade} anos de idade, sua nota foi ${this.#nota}.`)
    verNota = () => this.#nota;
}

const duda = new Aluno("Duda", 16, 90)
console.log(duda.nome);
console.log(duda.verNota ());
duda.tudo();
