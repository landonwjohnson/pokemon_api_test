import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon, getSpecies, getMove } from '../services/pokemon';
import '../css/card.css';
import q from "q";
// import { getCharacteristics } from '../services/pokemon';



export default class Card extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        species: "Pokemon",
        id: 0,
        name: "Name",
        HP: "0",
        color: "",
        height: "0",
        weight: "0",
        sprite: "",
        move: "",
        about: "About this pokemon",
        loading: false
      }
      this.fireAPI = this.fireAPI.bind(this);
      this.countUp = this.countUp.bind(this);
      this.countDown = this.countDown.bind(this);
      
  }
  

  fireAPI(id){
    this.setState({
      loading: true,
      species: "Pokemon",
      name: "",
      HP: "0",
      color: "",
      height: "0",
      weight: "0",
      sprite: "",
      move: "",
      about: "",
    })

    q.all([
      getPokemon(id),
      getSpecies(id),
      getMove(id)
    ])

    
    .then((data) => {
      const pokemon = data[0];
      const species = data[1];
      const move = data[2];
      this.setState({
        species: species.genera[2].genus,
        about: species.flavor_text_entries[1].flavor_text,
        id: pokemon.id,
        name: pokemon.name,
        HP: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        sprite: pokemon.sprites.front_default,
        color: species.color.name,
        loading: false
      })
    })
  }

  countUp(id){
    this.setState({
      id
    })
    this.fireAPI(id);
  }

  countDown(id){
    this.setState({
      id
    })
    this.fireAPI(id);
  }

  render() { 
   
    return ( <div>
        
      </div>
    );
  }
}
