import React from 'react';
//import './style.css';

import Footer from '../Components/Footer';

import Tit from '../Obj/Tit';
import Sub from '../Obj/Sub';

const Home = () => {
    return (
        <div className="container-fluid">
            <main>
                <Tit className="title">Seja bem vindo (a)!</Tit>
                <Sub className="subtitle">Aqui em nossa loja, <em>programadores têm desconto</em> nos produtos para sua casa!</Sub>
                <img class = " container "src="/img/background.jpg" class = " d-block w-100 "/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;