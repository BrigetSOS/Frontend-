import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class ChooseAdmin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer className="footer">
                <div className="footer__ong adminactive">
                    
                    <p>
                        <NavLink to='/onglist'>
                            ONGs
                        </NavLink>
                    </p>
                </div>
                <div className="footer__admin adminactive">
                    <span className="adminbl-2"></span>
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
 
export default ChooseAdmin;