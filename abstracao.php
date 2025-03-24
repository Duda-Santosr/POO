<?php

abstract class Pessoa{
    public $nome;
    
    public function __construct($nome)
    {
        $this->nome = $nome;
    }
}

class Aluno extends Pessoa{

}

$isabela = new Aluno ("Isabela");
echo $isabela->nome."É ele"

?>