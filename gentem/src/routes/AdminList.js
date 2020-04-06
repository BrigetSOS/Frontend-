import React, { Component } from 'react';
import Header from '../components/Header';
import AdminGrid from '../components/AdminList/AdminGrid';
import ChooseAdmin from '../components/AdminList/ChooseAdmin';


class AdminList extends Component {
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
                <AdminGrid
                
                />
                <ChooseAdmin
                
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default AdminList;