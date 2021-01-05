import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './style.css';

import Home from '../Pages/Home';
import Produtos from '../Pages/Produtos';
import Lojas from '../Pages/Lojas';
import Contato from '../Pages/Contato';
import Formulário from '../Pages/Formulário';

const App = () => {
    return (
        <div className="container-route">
          <header>
            <nav className="navbar navbar-expand-lg justify-content-around" id="menu">
                <Link to="/" id="link" className="navbar-brand"><img width="80px" src="/img/logo.png" alt="Página Inicial" /></Link>
                <Link to="/Produtos" id="link" className="nav-link">Nossos produtos</Link>
                <Link to="/Lojas" id="link" className="nav-link">Nossas lojas</Link>
                <Link to="/Contato" id="link" className="nav-link">Fale conosco</Link>
            </nav>
          </header>
          <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Produtos" component={Produtos} />
                <Route path="/Lojas" component={Lojas} />
                <Route path="/Contato" component={Contato} />
                <Route path="/Pedido/:id/:desc" component={Formulário} />
            </Switch>   
          </main>  
        </div>
    );
}

export default App;

