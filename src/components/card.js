import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon } from '../services/pokemon';
import '../css/card.css';

export default class Card extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        pokemon: {},
        id: 3
      }
    
  }

  componentDidMount(){
    getPokemon(this.state.id).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    })
  }
  render() {
    return (
      <div className="pokemon-card-container">
            <div className="pokemon-title">
            <h1 className="pokemon-name">{this.state.pokemon.name} </h1>
            <h1 className="pokemon-id">{this.state.pokemon.id} </h1>
            </div>

            <div className="picture-frame">

            </div>
            
       
         
            <h1>{this.state.pokemon.height} {this.state.pokemon.weight}</h1>
            
            <h1>{this.state.pokemon.type}</h1>
        
      </div>
    );
  }
}
