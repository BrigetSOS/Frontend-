import React, { Component } from 'react';
import Bell from '../assets/images/bell.svg';

class Header extends Component {
    // state = {  }
    render() { 
        return ( 
            <header className="header">
                <div className="header__logo">
                    <img src="https://fakeimg.pl/70x30/bebebe/eae0d0/?retina=1" alt="Gentem" />
                </div>
                <div className="header__buttons">
                    <div className="header__buttons--notification">
                        <img src={Bell} alt="Notificaciones" />
                    </div>
                    <div className="header__buttons--logout"><p>Logout</p>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;