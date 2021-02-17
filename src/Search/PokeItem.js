import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className='PokeList'><img alt='pokemon' src={this.props.pokemonProp.url_image} />
                <p>Pokemon Name: {this.props.pokemonProp.pokebase}</p>
                <p>Attack: {this.props.pokemonProp.attack}</p>
                <p>Defense: {this.props.pokemonProp.defense}</p>
                <p>Speed: {this.props.pokemonProp.speed}</p>
                <p>Type: {this.props.pokemonProp.type_1}</p>
            </li>
        )
    }
}
