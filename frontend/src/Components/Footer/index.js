import React from 'react';
import './style.css';

import Sub from '../../Obj/Sub'; 

const Footer = () => {
    return (
        <div className="row">
            <div id="box-footer" className="col">
              <Sub><b className="text-pay">Formas de pagamento:</b></Sub>
               <img src="/img/formas-pagamento.jpg" alt="Formas de pagamento" width="270px"  />
               <Sub>&copy; Recode Pro</Sub>
            </div>
        </div>
   )
}

export default Footer;