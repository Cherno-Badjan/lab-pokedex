import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <>
                Sort By:
                <select onChange={this.props.handleChange}
                    value={this.props.currentValue}>

                    {this.props.options.map(
                        listItem => <option value={listItem} key={listItem}>{listItem}</option>)}
                </select>
            </>
        )
    }
}