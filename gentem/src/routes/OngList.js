import React, { Component } from 'react';
import Header from '../components/Header';
import OngGrid from '../components/OngList/OngGrid';
import ChooseOng from '../components/OngList/ChooseOng';


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
                <ChooseOng
                
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default OngList;