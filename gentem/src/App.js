import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './routes/Home';
import AdminList from './routes/AdminList';
import AdminOngList from './routes/AdminOngList';
import AdminNew from './routes/AdminNew';
import Cuenta from './routes/Cuenta';
import Info from './routes/Info';
import Donaciones from './routes/Donaciones';
import RRPP from './routes/RRPP';
import OngList from './routes/OngList';
import OngProfile from './routes/OngProfile';



function App() {

  return (
    <Router>
      <div className="App">
        <div className='NavList'>
          <Link to='/'>
            Inicio
          </Link>
          <NavLink to='/adminonglist' activeClassName='activo'>
            Ong List
          </NavLink>
          <NavLink to='/adminlist' activeClassName='active'>
            Admin List
          </NavLink>
          <NavLink to='/adminnew' activeClassName='adminnewactive'>
            Admin New
          </NavLink>
          <NavLink to='/cuenta'>
            Cuenta
          </NavLink>
          <NavLink to='/info'>
            Info
          </NavLink>
          <NavLink to='/donaciones'>
            Donaciones
          </NavLink>
          <NavLink to='/RRPP'>
            RRPP
          </NavLink>
          <NavLink to='/onglist'>
            Lista de ONG
          </NavLink>
          <NavLink to='/ongprofile'>
            Perfil de ONG
          </NavLink>
        </div>
        <hr/>
        <Switch >
          <Route path='/adminonglist'>
            <AdminOngList 
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
          <Route path='/cuenta'>
            <Cuenta
            
            />
          </Route>
          <Route path='/info'>
            <Info
            
            />
          </Route>
          <Route path='/donaciones'>
            <Donaciones
            
            />
          </Route>
          <Route path='/RRPP'>
            <RRPP
            
            />
          </Route>
          <Route path='/onglist'>
            <OngList
            
            />
          </Route>
          <Route path='/ongprofile'>
            <OngProfile
            
            />
          </Route>
          <Route path='/'>
            <Home

            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
