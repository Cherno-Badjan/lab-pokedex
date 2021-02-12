import React, { Component } from 'react'
import PokeList from './PokeList.js';
import pokemonData from './Data.js';

export default class SearchPage extends Component {
    state = {
        pokebases: pokemonData,
        sortOrder: 'Ascending',
        sortBy: 'pokebase',
        filter: '',
    }

    handleChange = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }
    handleChange = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }
    handleChange = (e) => {
        this.setState({
            filter: e.target.value
        })
    }
    render() {
        pokemonData.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
        const filteredPokes = pokemonData.filter(pokebase => pokebase.pokebase.includes(this.state.filter))

        return (
            <>
                Sort By:
                <select onChange={this.handleChange}>
                    <option value="pokemon">Pokemon</option>
                    <option value="type_1">Type</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option></select>
                <select onChange={this.handleChange}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <PokeList filteredPokemons={filteredPokes} />
            </>
        );
    }
}