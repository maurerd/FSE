import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Sub from '../Obj/Sub';

const Contato = () => {
    return (
        <div className="container-fluid">
            <main>
                
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img style={{width:35}} src="./img/email.png" />
                            <Sub>contato@fullstackeletro.com</Sub>
                        </div>
                        <div class="col">
                            <img style={{width:45}} src="./img/whatsapp.png" />
                            <Sub>(11) 99999-9999</Sub>
                        </div>
                    </div>
                
                    <form>
                        <div className="form-group pt-5">
                            <Sub>E-mail:</Sub>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Exemplo@email.com" />
                        </div>
                        <div class="form-group">
                            <Sub>Mensagem:</Sub>
                            <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua mensagem" />
                        </div>         
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contato;