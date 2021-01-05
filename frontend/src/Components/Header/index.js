import React from 'react';
import './style.css';

import Tit from '../../Obj/Tit';

const Header = ({ children }) => {
    return (
        <div className="section">
            <Tit>{children}</Tit>
            <hr/>
            
        </div>
    );
}

export default Header;