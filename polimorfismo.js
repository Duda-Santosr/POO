class Pessoa{
    constructor(nome){
        // O constructor é um método tradicional
        this.nome= nome;
    }
    apresentar= () => console.log (`Olá, sou ${this.nome}.`)
}

class Aluna extends Pessoa{
    apresentar= () => console.log (`Olá, sou ${this.nome} e eu sou uma aluna.`)
}

class Professor extends Pessoa{
    apresentar = () => console.log(`Olá, meu nome é ${this.nome} e eu sou professor .`)
}

// Criando objetos
const duda = new Aluna("Duda");
const raul = new Professor ("Raul");
duda.apresentar();
raul.apresentar();


// PESSOA tem um método padrão APRESENTAR();
// ALUNO e PROFESSOR herdam esse método, mas reescrevem, para exibir mensagem diferentes.
// Mesmo método, e comportamentos diferentes 
// Isso é polimorfismo.