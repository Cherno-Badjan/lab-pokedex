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
        currentPage: 1,
        perPage: 10,
        totalPokemon: 0,

    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&perPage=${this.state.perPage}&page=${this.state.currentPage}`);

        this.setState({
            pokemonData: data.body.results,
            loading: false,
            totalPokemon: data.body.count,
        })
        console.log(this.state)
    }

    handleClick = async () => {
        await this.setState({ currentPage: 1 });
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

    handlePerPage = (e) => {
        this.setState({
            perPage: e.target.value
        })
    }
    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        })
        await this.fetchPokemon();
    }
    handlePreviousClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        })
        await this.fetchPokemon();
    }


    render() {



        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

        return (
            <>
                <div>
                    <SearchBar currentValue={this.state.query}
                        handleChange={this.handleQuery}
                        handleClick={this.handleClick} />
                    Results Per Page:<select onChange={this.handlePerPage}>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                    </select>
            Sort By:
                 <Sort currentValue={this.state.sortBy} handleChange={this.handleSortBy} options={[{ value: 'pokemon', name: 'Pokemon' }, { value: 'type_1', name: 'Type' }, { value: 'attack', name: 'Attack' }, { value: 'defense', name: 'Defense' }]} />
                    <Sort currentValue={this.state.sortOrder} handleChange={this.handleSortOrder} options={[{ value: 'Ascend', name: 'Ascending' }, { value: 'Descend', name: 'Descending' }]} />
                    <h3>Page {this.state.currentPage}</h3>
                    <button onClick={this.handlePreviousClick} disabled={this.state.currentPage === 1}>Previous</button>
                    <button disabled={this.state.currentPage === lastPage} onClick={this.handleNextClick}>Next</button>
                </div>
                <section className='pokemon'>
                    {this.state.loading ? <Spinner /> : <PokeList pokemonData={this.state.pokemonData} />
                    }

                </section>
            </>
        )
    }
}

