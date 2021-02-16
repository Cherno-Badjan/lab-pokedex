import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <ul className='pokemons'>{this.props.pokemons.map(pokemonObject => <PokeItem key={pokemonObject._id} pokemonProp={pokemonObject} />)}</ul>
        )
    }
}
