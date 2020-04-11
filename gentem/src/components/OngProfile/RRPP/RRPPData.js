import React, { Component } from 'react';
import HeroTitle from '../HeroTitle';


class RRPPData extends Component {
    // state = {  }
    render() { 
        return ( 
            <section className='flex2'>
                <HeroTitle
                 title='Patrocinio'
                />
                <section className='ongProfile'>
                    <form action='#'>
                        <div className='ongProfile--patrocinio'>
                            <div className='ongProfile__Data--Title'>
                                Cuentas para depósitos
                            </div>
                            <div className='ongProfile__images pb-2'>
                                <div className='ongProfile__images--container'>    
                                    <div className='ongProfile__container--card'>
                                            <div className='ongProfile__card--img'>
                                                <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                            <div className='ongProfile__card--img'>
                                                <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                            <div className='ongProfile__card--img'>
                                                <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                            <div className='ongProfile__card--img'>
                                                <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                            <div className='ongProfile__card--img'>
                                                <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                            <div className='ongProfile__card--img'>
                                                <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ongProfile__button2 pb-2'>
                                <input type='submit' value='AGREGAR PATROCINADOR'></input>
                            </div>
                        </div>
                        <div className='ongProfile--patrocinio'>
                            <div className='ongProfile__Data--Title'>
                                Campañas
                            </div>
                            <div className='ongProfile__images pb-2'>
                                <div className='ongProfile__images--container'>
                                    <div className='ongProfile__container--card'>
                                        <div className='ongProfile__card--img'>
                                            <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            <p className='ongProfile__card--details'>
                                            Descripción de campaña puede tener muchos...
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                        <div className='ongProfile__card--img'>
                                            <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            <p className='ongProfile__card--details'>
                                            Descripción de campaña puede tener muchos...
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                        <div className='ongProfile__card--img'>
                                            <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            <p className='ongProfile__card--details'>
                                            Descripción de campaña puede tener muchos...
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                        <div className='ongProfile__card--img'>
                                            <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            <p className='ongProfile__card--details'>
                                            Descripción de campaña puede tener muchos...
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                        <div className='ongProfile__card--img'>
                                            <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            <p className='ongProfile__card--details'>
                                            Descripción de campaña puede tener muchos...
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ongProfile__container--card'>
                                        <div className='ongProfile__card--img'>
                                            <img src='https://fakeimg.pl/50x50/bebebe/eae0d0/?retina=1' alt=''/>
                                            <p className='ongProfile__card--details'>
                                            Descripción de campaña puede tener muchos...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ongProfile__button2 pb-2'>
                                <input type='submit' value='AGREGAR CAMPAÑA'></input>
                            </div>
                        </div>
                        <div className='ongProfile--deposit'>
                            <div className='ongProfile__Data--Title'>
                                Prensa
                            </div>
                            <div className='ongProfile__grid title pb-2'>
                                <div className='ongProfile__grid--direccion'>Artículos</div>
                                <div className='ongProfile__grid--editar'>Editar</div>
                                <div className='ongProfile__grid--borrar'>Borrar</div>
                            </div>
                            <div className='ongProfile__grid pb-2 pt-2'>
                                <div className='ongProfile__grid--direccion'>Artículo 1</div>
                                <div className='ongProfile__grid--editar'>Icono</div>
                                <div className='ongProfile__grid--borrar'>Icono</div>
                            </div>
                            <div className='ongProfile__grid pb-2 pt-2'>
                                <div className='ongProfile__grid--direccion'>Artículo 2</div>
                                <div className='ongProfile__grid--editar'>Icono</div>
                                <div className='ongProfile__grid--borrar'>Icono</div>
                            </div>
                            <div className='ongProfile__button2 pt-2 pb-2 vh'>
                                <input type='submit' value='AGREGAR ARTÍCULO'></input>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
         );
    }
}
 
export default RRPPData;