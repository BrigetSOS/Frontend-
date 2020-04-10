import React, { Component } from 'react';
import Search from '../../../assets/images/search.svg';

class OngGrid extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <section className="flex2">
            <section className="hero wd">
                <div className="hero__title">
                    <p>ONGs</p>
                </div>
                <div className="hero__input">
                        <input className="input" type="text" placeholder="Buscar ONG" />
                        <img src={Search} alt="Buscador" />
                </div>
            </section>
            <section className="list">
                    <div className="grid">
                        <div className="list__text--name">
                            <p>Nombre</p>
                        </div>
                        <div className="list__text--email">
                            <p>Email</p>
                        </div>
                        <div className="list__text--status">
                            <p>Estado</p>
                        </div>
                        <div className="list__text--edit">
                            <p>Editar</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Borrar</p>
                        </div>
                    </div>
                    <div className="grid pt-2">
                        <div className="list__text--name size ">
                            <p>Nombre ONG</p>
                        </div>
                        <div className="list__text--email size">
                            <p>yolanda.holmes@msn.com</p>
                        </div>
                        <div className="list__text--status">
                            <p>Borrador</p>
                        </div>
                        <div className="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div>    
                    <div className="grid pt-2">

                        <div className="list__text--name size">
                            <p>Nombre ONG</p>
                        </div>
                        <div className="list__text--email size">
                            <p>becky.mullins@outlook.com</p>
                        </div>
                        <div className="list__text--status true">
                            <div className="list__text--status true">
                                <input type="checkbox" name="switch-button" id="switch-label" className="list__status--checkbox" />
                                <label htmlFor="switch-label" className="list__status--label"></label>
                            </div>
                        </div>
                        <div className="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div> 
                    <div className="grid pt-2">
                        <div className="list__text--name size">
                            <p>Nombre ONG</p>
                        </div>
                        <div className="list__text--email size">
                            <p>dorothy.martin@aol.com</p>
                        </div>
                        <div className="list__text--status">
                            <p>Borrador</p>
                        </div>
                        <div className="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div> 
                    <div className="grid pt-2">
                        <div className="list__text--name size">
                            <p>Nombre ONG</p>
                        </div>
                        <div className="list__text--email size">
                            <p>paula.butler@gmail.com</p>
                        </div>
                        <div className="list__text--status">
                            <p>Borrador</p>
                        </div>
                        <div className="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div>   
            </section>
            
        </section>
    
           

        );
    }
}
 
export default OngGrid;