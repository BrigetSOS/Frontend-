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
import Style from './assets/css/style.css';
import ListCss from './assets/css/list.css';
import OngListCss from './assets/css/onglist.css'
import AdminListCss from './assets/css/adminlist.css'
import AdminNewCss from './assets/css/adminnew.css'



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
            className={Style, ListCss, OngListCss}
            />
          </Route>
          <Route path='/adminlist'>
            <AdminList
            className={Style, ListCss, AdminListCss}
            />
          </Route>
          <Route path='/adminnew'>
            <AdminNew
            className={Style, AdminNewCss}
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
