import React, { Component } from 'react';

class OngAdminButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <footer class="footer">
                <div class="footer__ong">
                    <span class="bl-2"></span>
                    <p>
                        ONGs
                    </p>
                </div>
                <div class="footer__admin">
                    <p>
                        Admins
                    </p>
                </div>
            </footer>
         );
    }
}
 
export default OngAdminButton;