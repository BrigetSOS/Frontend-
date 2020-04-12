import React, { Component } from 'react';
import Header from '../components/SuperAdmin/Header';
import AdminGrid from '../components/SuperAdmin/AdminList/AdminGrid';
import Choose from '../components/SuperAdmin/Choose';
import '../assets/css/style.css';
import '../assets/css/list.css';
import '../assets/css/adminlist.css'


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
                <Choose
                
                />
            </div>
           
            </React.StrictMode>    

         );
    }
}
 
export default AdminList;