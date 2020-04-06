import React, { Component } from 'react';
import Search from '../../assets/images/search.svg';

class OngGrid extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <section class="flex2">
            <section class="search wd">
                <div class="search__title">
                    <p>ONGs</p>
                </div>
                <div class="search__input">
                        <input class="input" type="text" placeholder="Buscar ONG" />
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
                            <p>Estado</p>
                        </div>
                        <div class="list__text--edit">
                            <p>Editar</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Borrar</p>
                        </div>
                    </div>
                    <div class="grid pt-2">
                        <div class="list__text--name size ">
                            <p>Nombre ONG</p>
                        </div>
                        <div class="list__text--email size">
                            <p>yolanda.holmes@msn.com</p>
                        </div>
                        <div class="list__text--status">
                            <p>Borrador</p>
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
                            <p>Nombre ONG</p>
                        </div>
                        <div class="list__text--email size">
                            <p>becky.mullins@outlook.com</p>
                        </div>
                        <div class="list__text--status true">
                            <p>
                            <div class="list__text--status true">
                                <input type="checkbox" name="switch-button" id="switch-label" class="list__status--checkbox" />
                                <label for="switch-label" class="list__status--label"></label>
                            </div>
                            </p>
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
                            <p>Nombre ONG</p>
                        </div>
                        <div class="list__text--email size">
                            <p>dorothy.martin@aol.com</p>
                        </div>
                        <div class="list__text--status">
                            <p>Borrador</p>
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
                            <p>Nombre ONG</p>
                        </div>
                        <div class="list__text--email size">
                            <p>paula.butler@gmail.com</p>
                        </div>
                        <div class="list__text--status">
                            <p>Borrador</p>
                        </div>
                        <div class="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div class="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div>   
            </section>
            
        </section>
    
           

        );
    }
}
 
export default OngGrid;