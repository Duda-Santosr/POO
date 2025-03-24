<?php
$aluno = [
    "nome" => "Duda",
    "idade" => 17,

    "estudar" => function() use (&$aluno){
        echo "{$aluno['nome']} está estudando";
    }

]

?>