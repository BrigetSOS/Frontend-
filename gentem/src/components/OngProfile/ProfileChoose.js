import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import '../../assets/css/style.css';
import '../../assets/css/list.css';
import '../../assets/css/adminlist.css'

class ProfileChoose extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer className="footer profile">
                 <NavLink to='/cuenta' activeClassName='cuenta__activo'>
                <div className="footer__account">
                    <span className="bl-2"></span>                   
                    <p>
                            Cuenta
                    </p>
                </div>
                </NavLink>
                <NavLink to='/info' activeClassName='info__activo'>
                <div className="footer__info">
                    <span className="bl-2"></span>
                    <p>
                            Info
                    </p>
                </div>
                </NavLink>
                <NavLink to='/donaciones' activeClassName='donaciones__activo'>
                <div className="footer__donaciones">
                    <span className="bl-2"></span>                   
                    <p>
                            Donaciones
                    </p>
                </div>
                </NavLink>
                <NavLink to='/RRPP' activeClassName='rrpp__activo'>
                <div className="footer__rrpp">
                    <span className="bl-2"></span>                   
                    <p>
                            RRPP
                    </p>
                </div>
                </NavLink>
                <NavLink to='/onglist' activeClassName='contacto__activo'>
                <div className="footer__ong">
                    <span className="bl-2"></span>                   
                    <p>
                            Contacto
                    </p>
                </div>
                </NavLink>
            </footer>
         );
    }
}
 
export default ProfileChoose;