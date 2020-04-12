import React, { Component } from 'react';
import ProfileChoose from '../components/OngProfile/ProfileChoose';
import AccountHeader from '../components/OngProfile/AccountHeader';
import AccountData from '../components/OngProfile/Account/AccountData';
import '../assets/css/style.css';
import '../assets/css/list.css';
import '../assets/css/ongprofile.css';


class Cuenta extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { title: 'Cuneta' }
    // }
   

    render() { 
        return ( 
                  
            <React.StrictMode>
                
            <AccountHeader 
            titulo = 'Cuenta'
            />
            <div className='flex'> 
                <AccountData
                
                />
               <ProfileChoose
            
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default Cuenta;