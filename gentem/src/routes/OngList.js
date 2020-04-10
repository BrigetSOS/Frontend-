import React, { Component } from 'react';
import Header from '../components/SuperAdmin/Header';
import OngGrid from '../components/SuperAdmin/OngList/OngGrid';
import Choose from '../components/SuperAdmin/Choose';
import '../assets/css/style.css';
import '../assets/css/list.css';
import '../assets/css/onglist.css'


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
                <Choose
                
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default OngList;