import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <Link to={this.props.pokemon.pokemon}>
                <li className='PokeList'><img alt='pokemon' src={this.props.pokemon.url_image} />
                    <p>Pokemon Name: {this.props.pokemon.pokebase}</p>
                    <p>Attack: {this.props.pokemon.attack}</p>
                    <p>Defense: {this.props.pokemon.defense}</p>
                    <p>Speed: {this.props.pokemon.speed}</p>
                    <p>Type: {this.props.pokemon.type_1}</p>
                </li>
            </Link>
        )
    }
}
