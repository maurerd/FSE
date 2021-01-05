import React from 'react';

import {Link} from 'react-router-dom';

import Header from '../Components/Header'; 
import Footer from '../Components/Footer';

import Tit from '../Obj/Tit';
import Sub from '../Obj/Sub';

const Produtos = () => {
    const [product, setProduct] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://localhost/projetos/fseletro/backend/produtos.php";
        const response = await fetch(url);
        setProduct(await response.json());    
    }, []);

    const ExibirProdutos = (cat) => {
        let items = document.getElementsByClassName("box-card");
        for (let i = 0; i < items.length; i++) {
            if (cat == items[i].id) {
                items[i].style = "display:inline-block;";
            }
            else 
            {
                items[i].style = "display:none";
            }
        }
    }
    const ExibirTodos = () => {
        let items = document.getElementsByClassName("box-card");
        for (let i = 0; i < items.length; i++) {
            items[i].style = "display:inline-block;";
        }
    }

    return (
        <div className="container-fluid">
            <main>
  
                <div className="nav flex-column">
                    <ul className="list-group">
                        <li class = " nav-item " button  class = " btn btn-outline-light w-100 font-weight-bold " onClick={ExibirTodos}>
                            Todos
                            <span className="badge badge-pill">12</span>
                        </li>
                        <li class = " nav-item "  button  class = " btn btn-outline-light w-100 font-weight-bold " onClick={() => ExibirProdutos("geladeira")}>
                            Geladeiras
                            <span className="badge badge-pill">3</span>
                        </li>
                        <li class = " nav-item " button  class = " btn btn-outline-light w-100 font-weight-bold " onClick={() => ExibirProdutos("fogao")}>
                            Fogões
                            <span className="badge badge-pill">2</span>
                        </li>
                        <li class = " nav-item " button  class = " btn btn-outline-light w-100 font-weight-bold " onClick={() => ExibirProdutos("micro-ondas")}>
                            Microondas
                            <span className="badge badge-pill">3</span>
                        </li>
                        <li class = " nav-item " button  class = " btn btn-outline-light w-100 font-weight-bold " onClick={() => ExibirProdutos("lava-roupas")}>
                            Lava-roupas
                            <span className="badge badge-pill">2</span>
                        </li>
                        <li class = " nav-item " button  class = " btn btn-outline-light w-100 font-weight-bold " onClick={() => ExibirProdutos("lava-loucas")}>
                            Lava-louças
                            <span className="badge badge-pill">2</span>
                        </li>
                    </ul>
                </div>
                <div className="container-products">
                {product.map((element) => {
                    let description = element.descricao;
                    if (description.length > 55) {
                        description = description.substring(0, 55)+'...';
                    }
                    
                    return (
                        <div className="box-card" id={element.categoria} key={element.idproduto}>
                            <div className="card">                             
                                <img className="card-img-top" src={`/img/${element.imagem}`} alt={element.categoria}/>
                                <div className="card-body">
                                    <Sub>{description}</Sub>
                                    <Tit>R${element.preco}</Tit>
                                    <hr />
                                    <Link to={() => `/Pedido/${element.idproduto}/${element.descricao}`} style={{width:245}}>Comprar</Link>
                                </div>
                            </div>
                        </div>
                    ); 
                })}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Produtos;
