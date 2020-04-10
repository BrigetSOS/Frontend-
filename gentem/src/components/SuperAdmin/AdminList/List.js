import React, { Component } from 'react';
import ListData from './ListData';

class List extends Component {

  render() {
    return (
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
                        {
                             this.props.listado.map((character) => {
                                return <ListData key={ character.id }
                                  name={ character.name }
                                  status={ character.status } /> })
                        }
             </section>
    )
  }
}

export default List;