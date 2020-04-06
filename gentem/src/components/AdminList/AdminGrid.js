import React, { Component } from 'react';
import Search from '../../assets/images/search.svg';

class AdminGrid extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <section class="flex2">
            <section class="search wd">
                <div class="search__title">
                    <p>Admins</p>
                </div>
                <div class="search__input">
                        <input class="input" type="text" placeholder="Buscar admin" />
                        <img src={Search} alt="Buscador" />
                </div>
            </section>
            <section class="list">
                    <div class="grid">
                        <div class="list__text--name">
                            <p>Nombre</p>
                        </div>
                        <div class="list__text--email">
                            <p>Email</p>
                        </div>
                        <div class="list__text--status">
                            <p></p>
                        </div>
                        <div class="list__text--edit">
                            <p>Editar</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Borrar</p>
                        </div>
                    </div>
                    <div class="grid pt-2">
                        <div class="list__text--name size">
                            <p>Andres</p>
                        </div>
                        <div class="list__text--email size">
                            <p>andres@msn.com</p>
                        </div>
                        <div class="list__text--status">
                            <p></p>
                        </div>
                        <div class="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div>    
                    <div class="grid pt-2">

                        <div class="list__text--name size">
                            <p>Cristian</p>
                        </div>
                        <div class="list__text--email size">
                            <p>cristian@msn.com</p>
                        </div>
                        <div class="list__text--status">
                            <p></p>
                        </div>
                        <div class="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div> 
                    <div class="grid pt-2">
                        <div class="list__text--name size">
                            <p>Jaime</p>
                        </div>
                        <div class="list__text--email size">
                            <p>jaime@msn.com</p>
                        </div>
                        <div class="list__text--status">
                            <p></p>
                        </div>
                        <div class="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div> 
                    <div class="grid pt-2">
                        <div class="list__text--name size">
                            <p>Mar</p>
                        </div>
                        <div class="list__text--email size">
                            <p>mar@msn.com</p>
                        </div>
                        <div class="list__text--status">
                            <p></p>
                        </div>
                        <div class="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div>        
            </section>
            <section class="addNew wd">
                    <div class="addNew__button">
                        <button >NUEVO ADMIN</button>
                    </div>
            </section>
        </section>
        );
    }
}
 
export default AdminGrid;