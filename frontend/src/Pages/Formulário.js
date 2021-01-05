import React from 'react';

import Footer from '../Components/Footer';

import Tit from '../Obj/Tit';
import Sub from '../Obj/Sub';

const Formulário = ({ match }) => {
    const id = match.params.id;
    const desc = match.params.desc;
    

    function registro (event) {
        event.preventDefault();
        
        let formData = new FormData(event.target);

        const url = "http://localhost/produtos.php"

        fetch(url, {
            method:"POST",
            body:formData
        }).then((response) => response.json()).then((dados) => console.log(dados))
    }

    return (
        <div>
            <main>
                <div className="container-fluid d-flex justify-content-center pb-5">
                    <form onSubmit={registro}>
                        <Tit>Fazer compra</Tit>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <Sub>Nome Completo:</Sub>
                                <input type="text" className="form-control" name="nome" placeholder="Nome" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <Sub>Endereço:</Sub>
                                <input type="text" className="form-control" name="endereco" placeholder="Rua Poema dos Olhod, nº 5" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <Sub>Telefone:</Sub>
                                <input type="number" min="0" className="form-control" name="telefone" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-9">
                                <Sub>Produto:</Sub>
                                <select className="form-control" name="produto">
                                    <option selected>{desc}</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <Sub>Quantidade:</Sub>
                                <input type="number" min="0" className="form-control" name="quantidade" />
                            </div>
                            <input type="hidden" name="id" value={id} />
                        </div>
                        <center>
                            <button className="btn btn-primary" style={{width:300}}>Comprar</button>
                        </center>
                    </form>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Formulário;