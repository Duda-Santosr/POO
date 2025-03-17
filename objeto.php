<?php
$aluno = [
    "nome" => "Duda",
    "idade" => 16,

    "estudar" => function() use (&$aluno){
        echo "{$aluno['nome']} está estudando";
    }
       
    echo "Nome: " . $aluno['nome'] . "<br>";
]


?>