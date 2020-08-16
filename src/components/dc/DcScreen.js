import React, { Component } from 'react';
import { HeroList } from '../heroes/heroList';

class DcScreen extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{textAlign:'center'}}>DcScreen</h1>
                <hr></hr>

               <HeroList publisher="DC Comics"></HeroList>
            </div>
        );
    }
}

export default DcScreen;