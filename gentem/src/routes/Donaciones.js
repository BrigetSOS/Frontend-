import React, { Component } from 'react';
import ProfileChoose from '../components/OngProfile/ProfileChoose';
import AccountHeader from '../components/OngProfile/AccountHeader';
import DonacionesData from '../components/OngProfile/Donaciones/DonacionesData';
import '../assets/css/style.css';
import '../assets/css/list.css';
import '../assets/css/ongprofile.css';


class Donaciones extends Component {
    render() { 
        return ( 
                  
            <React.StrictMode>
                
            <AccountHeader 
            titulo = 'Donaciones'
            />
            <div className='flex'> 
                <DonacionesData
                
                />
               <ProfileChoose
            
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default Donaciones;