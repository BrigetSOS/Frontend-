import React, { Component } from 'react';
import NewAdmin from '../components/SuperAdmin/AdminNew/NewAdmin';
import AdminForm from '../components/SuperAdmin/AdminNew/AdminForm';
import Header from '../components/SuperAdmin/Header';
import '../assets/css/style.css';
import '../assets/css/adminnew.css'



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