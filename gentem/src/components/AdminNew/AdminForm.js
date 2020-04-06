import React, { Component } from 'react';

class AdminForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
    <React.Fragment>
        <section class="field">
            <form action="#">
                    <div class="field__grid mb-2">
                        <div class="field__text--label">
                            <label for="name" >Nombre</label>
                        </div>
                        <div class="field__text--input">
                            <input type="text" placeholder="Nombre de admin" aria-label="Nombre de admin" id="name" />
                        </div>
                    </div>
                    <div class="field__grid mb-2">
                        <div class="field__text--label">
                            <label for="email" >Email</label>
                        </div>
                        <div class="field__text--input">
                            <input type="text" placeholder="Email" aria-label="Email" id="email" />
                        </div>
                    </div>
                    <div class="field__grid mb-2">
                        <div class="field__text--label">
                            <label for="password" >Contraseña</label>
                        </div>
                        <div class="field__text--input">
                            <input type="password" placeholder="Contraseña" aria-label="Contraseña" id="password" />
                        </div>
                    </div>
                </form> 
        </section>
        <section class="addNewAdm">
            <div class="addNewAdm__button">
                <button >NUEVO ADMIN</button>
        </div>
        </section>
    </React.Fragment>
         );
    }
}
 
export default AdminForm;