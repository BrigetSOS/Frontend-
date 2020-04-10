import React, { Component } from 'react';
import HeroTitle from '../HeroTitle';


class AccountData extends Component {
    render() { 
        return ( 
            <section className='flex2'>
                <HeroTitle
                 title='Datos de la cuenta'
                />
                <section className='ongProfile'>
                    <form action='#'>
                        <div className='ongProfile__Data pb-2 '>
                            <p>
                                Nombre
                            </p>
                            <input type='text' placeholder='Nombre de ONG' aria-label='Nombre de ONG' id='name'></input>
                        </div>
                        <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Email
                            </p>
                            <input type='text' placeholder='Email de ONG' aria-label='Email de ONG' id='email'></input>
                        </div>
                         <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Password
                            </p>
                            <input type='password' placeholder='Password para la cuenta' aria-label='Password para la cuenta' id='password'></input>
                        </div>
                        <div className='ongProfile__Data pb-2 pt-2'>
                            <p>
                                Estado
                            </p>
                            <input type='text' placeholder='Borrador' aria-label='Borrador' id='estado'></input>
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
 
export default AccountData;