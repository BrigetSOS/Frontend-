import React, { Component } from 'react';

class ListData extends Component {

  render() {
    return(
                  <div className="grid pt-2">
                        <div className="list__text--name size">
                            <p>{this.props.name}</p>
                        </div>
                        <div className="list__text--email size">
                            <p>{this.props.status}</p>
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
    )
  }
}

export default ListData;