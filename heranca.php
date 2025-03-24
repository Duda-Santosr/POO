<?php

class Pessoa{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;

    }

    public function apresentar(){
        echo "Olá, sou {$this->nome} e tenho {$this->idade}";
    }
}

// A classe Aluno vai herdar de Pessoa
class Aluno extends Pessoa{
    public function estudar(){
        echo "{$this->nome} está estudando";
    }
}

// A classe Professor herda de Pessoa
class Professor extends Pessoa{
    public function ensinar(){
        echo "Professor {$this->nome} está ensinando";
    }
}


// Criando Objetos
$isa = new Aluno ("Isa", 49);
$nadja = new Professor ("Nadja", 16);

$isa->apresentar();
$isa->estudar();
$nadja->apresentar();
$nadja->ensinar();


?>