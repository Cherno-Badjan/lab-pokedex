import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div className='pokemons'>{this.props.pokemonData.map(pokemonObject => <PokeItem key={pokemonObject._id} pokemon={pokemonObject} />)}</div>
        )
    }
}
