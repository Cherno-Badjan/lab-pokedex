import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleChange}
                    value={this.props.currentValue}>

                    {this.props.options.map(
                        listItem => <option value={listItem.value} key={listItem}>{listItem.textContent}</option>)}
                </select>
            </>
        )
    }
}