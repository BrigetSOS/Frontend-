import React, { Component } from 'react';
import NewAdmin from '../components/AdminNew/NewAdmin';
import AdminForm from '../components/AdminNew/AdminForm';
import Header from '../components/Header';


class AdminNew extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
                  
            <React.StrictMode>
                <Header
            
                />
            
                <NewAdmin
                
                />

                <AdminForm
                
                />
           
            </React.StrictMode>    

         );
    }
}
 
export default AdminNew;