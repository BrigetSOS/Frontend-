import React, { Component } from 'react';
import HeroTitle from '../HeroTitle';


class InfoData extends Component {
    // state = {  }
    render() { 
        return ( 
            <section className='flex2'>
                <HeroTitle
                title='¿Para qué usarán las donaciones?'
                />
                <section className='ongProfile'>
                    <form action='#'>
                        <div className='ongProfile__Data pb-2'>
                            <p>
                                Destino de <br/> las <br/> donaciones
                            </p>
                            <textarea name='objetivo' placeholder='Explica claramente como usarán las donaciones recibidas' maxlength='140'></textarea>
                        </div>
                        <div className='ongProfile--deposit'>
                            <div className='ongProfile__Data--Title'>
                                Cuentas para depósitos
                            </div>
                            <div className='ongProfile__grid title pb-2'>
                                <div className='ongProfile__grid--cuenta'>Cuenta</div>
                                <div className='ongProfile__grid--editar'>Editar</div>
                                <div className='ongProfile__grid--borrar'>Borrar</div>
                            </div>
                            <div className='ongProfile__grid pb-2 pt-2'>
                                <div className='ongProfile__grid--cuenta'>Banco 1</div>
                                <div className='ongProfile__grid--editar'>Icono</div>
                                <div className='ongProfile__grid--borrar'>Icono</div>
                            </div>
                            <div className='ongProfile__grid pb-2 pt-2'>
                                <div className='ongProfile__grid--cuenta'>Banco 2</div>
                                <div className='ongProfile__grid--editar'>Icono</div>
                                <div className='ongProfile__grid--borrar'>Icono</div>
                            </div>
                            <div className='ongProfile__button2 pt-2 pb-2'>
                                <input type='submit' value='AGREGAR CUENTA'></input>
                            </div>
                        </div>
                        <div className='ongProfile--deposit'>
                            <div className='ongProfile__Data--Title'>
                                Puntos de recolecta de producto
                            </div>
                            <div className='ongProfile__grid title pb-2'>
                                <div className='ongProfile__grid--direccion'>Dirección</div>
                                <div className='ongProfile__grid--editar'>Editar</div>
                                <div className='ongProfile__grid--borrar'>Borrar</div>
                            </div>
                            <div className='ongProfile__grid pb-2 pt-2'>
                                <div className='ongProfile__grid--direccion'>Dirección 1</div>
                                <div className='ongProfile__grid--editar'>Icono</div>
                                <div className='ongProfile__grid--borrar'>Icono</div>
                            </div>
                            <div className='ongProfile__grid pb-2 pt-2'>
                                <div className='ongProfile__grid--direccion'>Dirección 2</div>
                                <div className='ongProfile__grid--editar'>Icono</div>
                                <div className='ongProfile__grid--borrar'>Icono</div>
                            </div>
                            <div className='ongProfile__button2 pt-2 pb-2'>
                                <input type='submit' value='AGREGAR DIRECCIÓN DE ENTREGA'></input>
                            </div>
                        </div>
                        <div className='ongProfile__button pt-2 vh'>
                            <input type='submit' value='GUARDAR'></input>
                        </div>
                    </form>
                </section>
            </section>
         );
    }
}
 
export default InfoData;