import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>

                <input placeholder="Choose A Pokemon" onChange={this.props.handleChange} value={this.props.currentValue} />
                <button onclick={this.props.handleClick} >Submit</button>
            </div>

        )
    }
}