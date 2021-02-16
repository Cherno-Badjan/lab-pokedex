import React, { Component } from 'react'
import request from 'superagent';
// import PokeList from './PokeList.js';
// import pokemonData from './Data.js';
// import SearchBar from './SearchBar.js';
// import Sort from './Sort.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        // sortOrder: 'ascending',
        // sortBy: 'pokebase',
        query: '',
    }

    handleClick = async () => {
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');
    }

    // handleSortBy = (e) => {
    //     this.setState({
    //         sortBy: e.target.value
    //     })
    // }
    // handleSortOrder = (e) => {
    //     this.setState({
    //         sortOrder: e.target.value
    //     })
    // }
    // handleFilter = (e) => {
    //     this.setState({
    //         query: e.target.value
    //     })
    // }
    this.setState({
        pokemon=data.body.results,
    })

render() {

//         if (this.state.sortBy) {

//             // if (this.state.sortBy) {
//             if (typeof (pokemonData[0][this.state.sortBy]) === 'number') {
//                 if (this.state.sortOrder === 'ascending') {
//                     this.state.pokebases.sort((a, b) => a[this.state.sortBy] - (b[this.state.sortBy]))
//                 } else { this.state.pokebases.sort((a, b) => b[this.state.sortBy] - (a[this.state.sortBy])) }
//             }
//         }

//         if (this.state.sortBy) {
//             if (typeof (pokemonData[0][this.state.sortBy]) !== 'number') {
//                 if (this.state.sortOrder === 'ascending') {
//                     this.state.pokebases.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
//                 }
//                 else {
//                     (this.state.pokebases.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])))
//                 }
//             }
//         }


//         const filteredPokes = pokemonData.filter(pokebase => pokebase.pokebase.includes(this.state.filter))
//         const sortByOptions = [{ value: 'pokemon', textContent: 'Pokemon' }, { value: 'type_1', textContent: 'Type' }, { value: 'attack', textContent: 'Attack' }, { value: 'defense', textContent: 'Defense' }]
//         const sortOrderOptions = [{ value: 'ascending', textContent: 'Ascending' }, { value: 'descending', textContent: 'Descending' }]
//         return (
//             <>
//                 Sort By:
//                 <Sort currentValue={this.state.sortBy} handleChange={this.handleSortBy} options={sortByOptions} />
//                 <Sort currentValue={this.state.sortOrder} handleChange={this.handleSortOrder} options={sortOrderOptions} />
//                 <SearchBar currentValue={this.state.filter} handleChange={this.handleFilter} />
//                 <PokeList pokemons={filteredPokes} />
//             </>
//         );
//     }
// }