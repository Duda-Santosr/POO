<?php

class Aluno{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function estudar (){
        echo "{$this->nome} está estudando";
    }
}

// Criando Objetos
$duda = new Aluno("Duda", 16);
$ana = new Aluno ("Ana", 17);

echo $duda->nome;
$ana->estudar();



?>