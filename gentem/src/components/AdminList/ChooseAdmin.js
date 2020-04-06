import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


class ChooseAdmin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer class="footer">
                <div class="footer__ong adminactive">
                    
                    <p>
                        <NavLink to='/onglist'>
                            ONGs
                        </NavLink>
                    </p>
                </div>
                <div class="footer__admin adminactive">
                    <span class="adminbl-2"></span>
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