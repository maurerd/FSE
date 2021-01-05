import React from 'react';
//import './style.css';

import Header from '../Components/Header'; 
import Footer from '../Components/Footer';

import Tit from '../Obj/Tit';
import Sub from '../Obj/Sub';

const Lojas = () => {
    return (
        <div className="container-fluid">
            <main>
               
                <div id="info" className="row justify-content-center">
                    <div class="col-4">
                        <Tit>Rio de Janeiro</Tit>
                        <Sub>Avenida Presidente Vargas, 5000</Sub>
                        <Sub>10 &ordm; andar</Sub>
                        <Sub>Centro</Sub>
                        <Sub>(21) 3333-3333</Sub>
                    </div>
                    <div class="col-4">
                        <Tit>São Paulo</Tit>
                        <Sub>Avenida Paulista, 985</Sub>
                        <Sub>3 &ordm; andar</Sub>
                        <Sub>Jardins</Sub>
                        <Sub>(11) 4444-4444</Sub>
                    </div>
                    <div class="col-4">
                        <Tit>Santa Catarina</Tit>
                        <Sub>Rua Major &Aacute;vila, 370</Sub>
                        <Sub>Vila Mariana</Sub>
                        <Sub>(47) 5555-5555</Sub>
                        <br />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Lojas;