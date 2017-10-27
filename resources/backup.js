import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon, getSpecies } from '../services/pokemon';
import '../css/card.css';
import q from "q";
// import { getCharacteristics } from '../services/pokemon';



export default class Card extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        species: "",
        id: 1,
        name: "",
        color: "",
        height: "",
        weight: "",
        loading: false
      }
      this.fireAPI = this.fireAPI.bind(this);
      this.countUp = this.countUp.bind(this);
      this.countDown = this.countDown.bind(this);
      
  }

  fireAPI(id){

    q.all([
      getPokemon(id),
      getSpecies(id)
    ])
    .then((data) => {
      const pokemon = data[0];
      const species = data[1];
      this.setState({
        species: species.genera[2].genus,
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
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
    let speciesUI;
    if(this.state.loading){
      speciesUI = <div className="loading"><span></span></div>
    }else{
      speciesUI = this.state.species
    }
   
    return (
      <div className="pokemon-card-container">
            <div className="pokemon-title">
            <h1 className="pokemon-name">{this.state.name} </h1>
            <h1 className="pokemon-id">#{this.state.id}  </h1> 
            </div>

            <div className="picture-frame">
             {speciesUI}
            </div>
            

           
            <div className = "body-type">  

            <button className="btn-counter" onClick={this.countDown}> - </button> 

            <h1>  Height: {this.state.height}m Weight: {this.state.weight}kg</h1>

            <button className="btn-counter" onClick={this.countUp.bind(this, this.state.id + 1)}> + </button>
            </div>


            <div className="attack-move">

              <h1></h1>
            </div>
            <span className="divider"> </span>
            <div className="attack-move"></div>
            <span className="divider"> </span>
            <div className="col3"> 
              <span className="item" />
              <span className="item" />
              <span className="item" />
            </div>
            <div className="about">

            </div> 
      </div>
    );
  }
}
