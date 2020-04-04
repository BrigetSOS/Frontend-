import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/css/onglist.css';
// import '../assets/css/adminlist.css';
import '../assets/css/adminnew.css';
import '../assets/css/list.css';
import Header from './Header';
import OngGrid from './OngGrid';
import OngAdminButton from './OngAdminButton';


class OngList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
                  
            <React.StrictMode>
                <Header
            
            />
            
            <div className='flex'> 
                <OngGrid
                
                />
                <OngAdminButton
                
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default OngList;