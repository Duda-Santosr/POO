// Criar classe pessoa
// Com parametro nome e idade
// Criar um método para apresentar
// Olá, sou nome e tenho a idade anos.

class Pessoa{
    constructor(nome, idade){
        // O constructor é um método tradicional
        this.nome= nome;
        this.idade= idade;
    }

    apresentar= () => console.log (`Olá, sou ${this.nome} e tenho ${this.idade} anos.`)
}

class Aluno extends Pessoa{
    estudar = () => console.log(`${this.nome} está estudando.`);
}

class Professor extends Pessoa{
    ensinar = () => console.log(`Professor ${this.nome} está ensinando.`)
}

// Criando objetos
const duda = new Aluno("Duda", 16);
const raul = new Professor ("Raul", 28);
duda.apresentar();
raul.apresentar();

duda.estudar();
raul.ensinar();


