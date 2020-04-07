import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import AdminList from './routes/AdminList';
import OngList from './routes/OngList';
import AdminNew from './routes/AdminNew';
import './assets/css/style.css';
import './assets/css/list.css';
import './assets/css/onglist.css'
import './assets/css/adminlist.css'
import './assets/css/adminnew.css'



function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <Link to='/'>
            Inicio
          </Link>
          <NavLink to='/onglist' activeClassName='ongactive'>
            Ong List
          </NavLink>
          <NavLink to='/adminlist' activeClassName='adminactive'>
            Admin List
          </NavLink>
          <NavLink to='/adminnew' activeClassName='adminnewactive'>
            Admin New
          </NavLink>
        </div>
        <hr/>
        <Switch >
          <Route path='/onglist'>
            <OngList 
            />
          </Route>
          <Route path='/adminlist'>
            <AdminList
            />
          </Route>
          <Route path='/adminnew'>
            <AdminNew
            />
          </Route>
          <Route path='/'>
            Este es el inicio
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
