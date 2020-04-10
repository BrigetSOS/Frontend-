import React, { Component } from 'react'

class HeroTitle extends Component{

    render(){
        return(

            <section className="hero wd account">
                <div className="hero__title">
                    <p> {this.props.title} </p>
                </div>
            </section>

        )
    }
}

export default HeroTitle;