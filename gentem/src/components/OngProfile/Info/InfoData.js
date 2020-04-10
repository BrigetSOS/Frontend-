import React, { Component } from 'react';
import HeroTitle from '../HeroTitle';


class InfoData extends Component {
    // state = {  }
    render() { 
        return ( 
            <section className='flex2'>
                <HeroTitle
                 title='Información General'
                />
                <section className='ongProfile'>
                    <form action='#'>
                        <div className='ongProfile__Data pb-2 '>
                            <p>
                                Logo
                            </p>
                            <img src='https://fakeimg.pl/90x40/bebebe/eae0d0/?retina=1' />
                        </div>
                        <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Imagen<br/>
                                Portada                            </p>
                                <img src='https://fakeimg.pl/90x40/bebebe/eae0d0/?retina=1' />
                        </div>
                         <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Objetivo
                            </p>
                            <textarea name='objetivo' placeholder='Objetivo de la fundación - 140 carácteres max.' maxlength='140'></textarea>
                        </div>
                        <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Descripción
                            </p>
                            <textarea name='objetivo' placeholder='Descripción: ¿Qué hace la fundación?' maxlength='140'></textarea>
                        </div>
                        <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Tipo de trabajo
                            </p>
                            <select name='trabajos'>
                                <option value='Trabajo0'>Selecciona uno o varios</option>
                                <option value='Trabajo 1'>Trabajo 1</option>
                                <option value='Trabajo 2'>Trabajo 1</option>
                                <option value='Trabajo 3'>Trabajo 1</option>

                            </select>
                        </div>
                        <div className='ongProfile__button pt-2'>
                            <input type='submit' value='GUARDAR'></input>
                        </div>
                    </form>
                </section>
            </section>
         );
    }
}
 
export default InfoData;