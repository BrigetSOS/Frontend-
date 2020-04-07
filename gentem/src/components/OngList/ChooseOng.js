import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class ChooseOng extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer className="footer">
                <div className="footer__ong ongactive">
                    <span className="ongbl-2"></span>
                    <p>
                        <NavLink to='/onglist'>
                            ONGs
                        </NavLink>
                    </p>
                </div>
                <div className="footer__admin ongactive">
                    <p>
                        <NavLink to='/adminlist'>
                            Admins
                        </NavLink>
                    </p>
                </div>
            </footer>
         );
    }
}
 
export default ChooseOng;