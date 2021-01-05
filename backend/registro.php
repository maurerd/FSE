<?php

require "./Models/Produto.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$product = new Produto;
$product->nome = $_POST['nome'];
$product->endereco = $_POST['endereco'];
$product->telefone = $_POST['telefone'];
$product->produto = $_POST['produto'];
$product->quantidade = $_POST['quantidade'];
$product->id = $_POST['id'];

$validate = $product->registro();

if ($validate == true) {
    echo json_encode(true);
}
else {
    echo json_encode(false);
}
