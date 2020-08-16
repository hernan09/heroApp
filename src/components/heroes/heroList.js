import React, { Component } from 'react';
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher';
import { HeroCards } from './HeroCards';



export const HeroList = ({publisher}) =>{
   
    const heroes = getHeroesByPublisher(publisher)

    return(
        <div className="card-columns">
            {
             heroes.map(hero =>(
               <HeroCards key={hero.id} {...hero}></HeroCards>
             )
               
             )
            }
        </div>
    )

}