import React, { Component } from 'react';
import ProfileChoose from '../components/OngProfile/ProfileChoose';
import AccountHeader from '../components/OngProfile/AccountHeader';
import RRPPData from '../components/OngProfile/RRPP/RRPPData';
import '../assets/css/style.css';
import '../assets/css/list.css';
import '../assets/css/ongprofile.css';



class RRPP extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
   

    render() { 
        return ( 
                  
            <React.StrictMode>
                
            <AccountHeader 
            titulo = 'Relaciones Públicas'
            />
            <div className='flex'> 
                <RRPPData
                
                />
               <ProfileChoose
            
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default RRPP;