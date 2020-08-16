import React, { Component } from 'react';
import { HeroList } from '../heroes/heroList';
class MarvelScreen extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{textAlign:'center'}}>MarvelScreen</h1>
                <hr></hr>

                <HeroList publisher="Marvel Comics"></HeroList>
            </div>
        );
    }
}

export default MarvelScreen;