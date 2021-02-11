import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <ul className='images'>{this.props.filteredImages.map(imageObject => <PokeItem key={imageObject._id} imageProp={imageObject} />)}</ul>
        )
    }
}
