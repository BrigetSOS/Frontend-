import React, { Component } from 'react';
import ProfileChoose from '../components/OngProfile/ProfileChoose';
import AccountHeader from '../components/OngProfile/AccountHeader';
import InfoData from '../components/OngProfile/Info/InfoData';
import '../assets/css/style.css';
import '../assets/css/list.css';
import '../assets/css/ongprofile.css';


class Info extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
   

    render() { 
        return ( 
                  
            <React.StrictMode>
                
            <AccountHeader 
            titulo = 'Info'
            />
            <div className='flex'> 
                <InfoData
                
                />
               <ProfileChoose
            
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default Info;