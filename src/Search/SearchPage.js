import React, { Component } from 'react'
import request from 'superagent';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import Spinner from './Spinner.js';
import PokeList from './PokeList.js';

export default class SearchPage extends Component {
    state = {
        pokemonData: [],
        sortOrder: '',
        sortBy: '',
        query: '',
        loading: false,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`);

        this.setState({
            pokemonData: data.body.results,
            loading: false,
        })
    }

    handleClick = async () => {
        await this.fetchPokemon();
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
    handleQuery = (e) => {
        this.setState({
            query: e.target.value
        })
    }


    render() {

        return (
            <>
                <div>
                    <SearchBar currentValue={this.state.query}
                        handleChange={this.handleQuery}
                        handleClick={this.handleClick} />
            Sort By:
                 <Sort currentValue={this.state.sortBy} handleChange={this.handleSortBy} options={[{ value: 'pokemon', name: 'Pokemon' }, { value: 'type_1', name: 'Type' }, { value: 'attack', name: 'Attack' }, { value: 'defense', name: 'Defense' }]} />
                    <Sort currentValue={this.state.sortOrder} handleChange={this.handleSortOrder} options={[{ value: 'Ascend', name: 'Ascending' }, { value: 'Descend', name: 'Descending' }]} />
                </div>
                <section className='pokemon'>
                    {this.state.loading ? <Spinner /> : <PokeList pokemonData={this.state.pokemonData} />
                    }

                </section>
            </>
        )
    }
}

