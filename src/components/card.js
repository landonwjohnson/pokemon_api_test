import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon } from '../services/pokemon';
import '../css/card.css';
import { getCharacteristics } from '../services/pokemon';

export default class Card extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        pokemon: {},
        id: 25
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
            <h1 className="pokemon-id">#{this.state.pokemon.id} </h1>
            </div>

            <div className="picture-frame">

            </div>
            
       
            <input pokemonCount={this.state.id} type="number" value={this.state.id}/>         
            <h1>{this.state.pokemon.height} {this.state.pokemon.weight}</h1>
            

        
      </div>
    );
  }
}
