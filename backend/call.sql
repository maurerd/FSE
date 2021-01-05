SELECT * 
FROM produtos 
JOIN pedidos
ON produtos.idproduto = pedidos.idpedidos;