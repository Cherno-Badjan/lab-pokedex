import React, { Component } from 'react'
import PokeList from './PokeList.js';
import pokemonData from './Data.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';

export default class SearchPage extends Component {
    state = {
        pokebases: pokemonData,
        sortOrder: 'Ascending',
        sortBy: 'pokebase',
        filter: '',
    }

    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }
    handleSortOrder = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }
    handleFilter = (e) => {
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
                {/* <Sort currentValue={this.state.sortBy} handleChange={this.handleSortBy} options={['Pokemon', 'Type', 'Attack', 'Defense']} /> */}
                {/* <Sort currentValue={this.state.sortOrder} handleChange={this.handleSortOrder} options={['Ascending', 'Descending']} /> */}
                <select onChange={this.handleSortBy}>
                    <option value="pokemon">Pokemon</option>
                    <option value="type_1">Type</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option></select>
                <select onChange={this.handleSortOrder}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <SearchBar currentValue={this.state.filter} handleChange={this.handleFilter} />
                <PokeList filteredPokemons={filteredPokes} />
            </>
        );
    }
}