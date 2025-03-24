<?php

class Pessoa{
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }

    public function apresentar(){
        echo "Olá, sou {$this->nome}";
    }
}

// A classe Aluno herda Pessoa e sobrescreve o método apresentar
class Aluno extends Pessoa{
    public function apresentar(){
        echo "Oi! Meu nome é {$this->nome} eu sou aluno";
    }
}

class Professor extends Pessoa{
    public function apresentar(){
        echo "Oi! Eu sou o Professor {$this->nome}";
    }
}

// Criando Objetos
$duda = new Aluno ("Duda");
$raul = new Professor ("Raul");

 $duda->apresentar();
 $raul->apresentar();

?>