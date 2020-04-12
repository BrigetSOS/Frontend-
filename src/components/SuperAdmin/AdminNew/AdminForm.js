import React, { Component } from 'react';

class AdminForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
    <React.Fragment>
        <section className="field">
            <form action="#">
                    <div className="field__grid mb-2">
                        <div className="field__text--label">
                            <label htmlFor="name" >Nombre</label>
                        </div>
                        <div className="field__text--input">
                            <input type="text" placeholder="Nombre de admin" aria-label="Nombre de admin" id="name" />
                        </div>
                    </div>
                    <div className="field__grid mb-2">
                        <div className="field__text--label">
                            <label htmlFor="email" >Email</label>
                        </div>
                        <div className="field__text--input">
                            <input type="text" placeholder="Email" aria-label="Email" id="email" />
                        </div>
                    </div>
                    <div className="field__grid mb-2">
                        <div className="field__text--label">
                            <label htmlFor="password" >Contraseña</label>
                        </div>
                        <div className="field__text--input">
                            <input type="password" placeholder="Contraseña" aria-label="Contraseña" id="password" />
                        </div>
                    </div>
                </form> 
        </section>
        <section className="addNewAdm">
            <div className="addNewAdm__button">
                <button >NUEVO ADMIN</button>
        </div>
        </section>
    </React.Fragment>
         );
    }
}
 
export default AdminForm;