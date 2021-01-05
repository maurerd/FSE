<?php

require "conexao.php";

class Product 
{
    public $idproduto;
    public $categoria;
    public $descricao;
    public $preco;
    public $precofinal;
    public $imagem;

    public static function getAll()
    {
        $connection = Connection ::getDb();
        $sql = $connection->query("SELECT * FROM produtos"); 
        return $sql->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registro()
    {
        $connection = Connection ::getDb();

        $sql = $connection->query("INSERT INTO pedidos (idpedidos, nome_cliente, endereco, telefone, produto, valor_unitario, quantidade, valor_total) 
        values ('$this->idpedidos', '$this->nome', '$this->endereco', '$this->telefone', '$this->produto', '$this->valor_unitario', '$this->quantidade', '$this->valor')");
        
        if ($sql->rowCount() > 0) {
            return true;
        }
        else {
            return false;            
        }
    }
}