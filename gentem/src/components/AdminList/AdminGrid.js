import React, { Component } from 'react';
import Search from '../../assets/images/search.svg';
  
// let ArrayNames = [
//     {
//     name: 'Juan',
//     mail: 'hola@juan.com',
//     estado: '',
//     editar: 'Icono',
//     borrar: 'Icono'
//     },
//     {
//     name: 'Marcos',
//     mail: 'hola@marcos.com',
//     estado: '',
//     editar: 'Icono',
//     borrar: 'Icono'
//     },
//     {
//     name: 'Ivan',
//     mail: 'hola@ivan.com',
//     estado: '',
//     editar: 'Icono',
//     borrar: 'Icono'
//     }
// ];

// let elemento; 

// let klemente =  ArrayNames.forEach((props) => {
//     let names = props.name;
//     let mail = props.mail;
//     let estado = props.estado;
//     let editar = props.editar;
//     let borrar = props.borrar;
//  elemento =  <div className="grid pt-2">
//             <div className="list__text--name size">
//                 <p>{names}</p>
//             </div>
//             <div className="list__text--email size">
//                 <p>{mail}</p>
//             </div>
//             <div className="list__text--status">                     
//                 <p>{estado}</p>
//             </div>
//             <div className="list__text--edit">
//                 <p>{editar}</p>
//             </div>
//             <div className="list__text--delete">
//                 <p>{borrar}</p>
//             </div>
//         </div>
// });

const proxy = 'http://cors-anywhere.herokuapp.com/';
const API = `${proxy}http://starlord.hackerearth.com/books`;
fetch(API)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
    })  
    .catch(err => console.error(err))

class AdminGrid extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    


    // componentDidMount(){
    //     fetch('http://localhost:3003/admin/list')
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(response => {
    //         console.log(response)
    //       })  
    //       .catch(err => console.error(err))
    //   }
      

    render() { 
        
        
        // function Comment(props) {
        //     for (let i = 0; i < props.length; i++) {
        //         console.log(props.length);
        //     return ( 
        //         (<div className="grid pt-2">
        //             <div className="list__text--name size">
        //                 <p>{props[i].name}</p>
        //             </div>
        //             <div className="list__text--email size">
        //                 <p>{props[i].mail}</p>
        //             </div>
        //             <div className="list__text--status">                     
        //                 <p>{props[i].estado}</p>
        //             </div>
        //             <div className="list__text--edit">
        //                 <p>{props[i].editar}</p>
        //             </div>
        //             <div className="list__text--delete">
        //                 <p>{props[i].borrar}</p>
        //             </div>
        //         </div>)
        //     );
        //   }   }
      

        return (
            <section className="flex2">
            <section className="search wd">
                <div className="search__title">
                    <p>Admins</p>
                </div>
                <div className="search__input">
                        <input className="input" type="text" placeholder="Buscar admin" />
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
                            <p></p>
                        </div>
                        <div className="list__text--edit">
                            <p>Editar</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Borrar</p>
                        </div>
                    </div>
                    
                    {/* {elemento} */}
            {/* {Comment(ArrayNames)} */}
                 
                    <div className="grid pt-2">
                        <div className="list__text--name size">
                            <p>Andres</p>
                        </div>
                        <div className="list__text--email size">
                            <p>andres@msn.com</p>
                        </div>
                        <div className="list__text--status">                     
                            <p></p>
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
                            <p>Cristian</p>
                        </div>
                        <div className="list__text--email size">
                            <p>cristian@msn.com</p>
                        </div>
                        <div className="list__text--status">
                            <p></p>
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
                            <p>Jaime</p>
                        </div>
                        <div className="list__text--email size">
                            <p>jaime@msn.com</p>
                        </div>
                        <div className="list__text--status">
                            <p></p>
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
                            <p>Mar</p>
                        </div>
                        <div className="list__text--email size">
                            <p>mar@msn.com</p>
                        </div>
                        <div className="list__text--status">
                            <p></p>
                        </div>
                        <div className="list__text--edit">
                            <p>Icono</p>
                        </div>
                        <div className="list__text--delete">
                            <p>Icono</p>
                        </div>
                    </div>        
            </section>
            <section className="addNew wd">
                    <div className="addNew__button">
                        <button >NUEVO ADMIN</button>
                    </div>
            </section>
        </section>
        );
    }
}
 
export default AdminGrid;