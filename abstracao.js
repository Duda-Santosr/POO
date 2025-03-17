class Pessoa{
    constructor (nome){
        if(this.constructor === Pessoa){
            throw newError("Não pode criar outro objeto")
        }
        this.nome=nome;
    }
}

class Aluno extends Pessoa{

}

const Isabela = new Aluno ("Isabela")
console.log(Isabela.nome)

// A classe PESSOA não pode ser instanciada diretamente 
// O IF no CONSTRUCTOR impede que objetos iguais seja criados 
// O ALUNO herda de pessoa, então pode ser instanciado normalmente
// Isso garante que PESSOA funcione como modelo para outras classes

