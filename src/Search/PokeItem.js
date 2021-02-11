import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className='PokeList'><img alt='pokemon' src={this.props.imageProp.url_image} />
                <p>Pokemon Name: {this.props.imageProp.pokemon}</p>
                <p>Attack: {this.props.imageProp.attack}</p>
                <p>Defense: {this.props.imageProp.defense}</p>
                <p>Speed: {this.props.imageProp.speed}</p>
            </li>
        )
    }
}
