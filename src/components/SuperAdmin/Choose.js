import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Choose extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer className="footer">
                 <NavLink to='/adminonglist' activeClassName='activo'>
                <div className="footer__ong">
                    <span className="bl-2"></span>                   
                    <p>
                       
                            ONGs
                       
                    </p>
                </div>
                </NavLink>
                <NavLink to='/adminlist' activeClassName='active'>
                <div className="footer__admin">
                    <span className="bl-2"></span>
                    <p>
                        
                            Admins
                       
                    </p>
                </div>
                </NavLink>
            </footer>
         );
    }
}
 
export default Choose;