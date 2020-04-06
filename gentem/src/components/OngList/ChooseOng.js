import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class ChooseOng extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer class="footer">
                <div class="footer__ong ongactive">
                    <span class="ongbl-2"></span>
                    <p>
                        <NavLink to='/onglist'>
                            ONGs
                        </NavLink>
                    </p>
                </div>
                <div class="footer__admin ongactive">
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