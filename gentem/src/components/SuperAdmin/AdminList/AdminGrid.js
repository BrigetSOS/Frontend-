import React, { Component } from 'react';
import Search from '../../../assets/images/search.svg';
import List from './List';
  


class AdminGrid extends Component {
      
        constructor(props) {
        super(props)
        this.state = { character: [] }
    }

    componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character?per_page=10')
      .then((response) => {
        return response.json()
      })
      .then((character) => {
        console.log(character.results)
        this.setState({ character: character.results })
      })
      .catch(err => console.error(err))
  }
    render() { 
        return (
            <section className="flex2">
            <section className="hero wd">
                <div className="hero__title">
                    <p>Admins</p>
                </div>
                <div className="hero__input">
                        <input className="input" type="text" placeholder="Buscar admin" />
                        <img src={Search} alt="Buscador" />
                </div>
            </section>


            <List listado={this.state.character} />
   

            <section className="addNew wd">
                    <div className="addNew__button">
                        <button >NUEVO ADMIN</button>
                    </div>
            </section>
        </section>
        )
        
    }
}
 
export default AdminGrid;