import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon, getSpecies, getType, moveDamageClass } from '../services/pokemon';
import '../css/card.css';
import leafEnergy from '../img/svg/leaf-energy.svg';
import fireEnergy from '../img/svg/fire-energy.svg';
import waterEnergy from '../img/svg/water-energy.svg';
import electricEnergy from '../img/svg/electric-energy.svg';
import fightingEnergy from '../img/svg/fighting-energy.svg';
import normalEnergy from '../img/svg/normal-energy.svg';
import noEnergy from '../img/svg/no-energy.svg';
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
        energy: noEnergy,
        color: "",
        height: "0",
        weight: "0",
        sprite: "",
        move: "",
        about: "About this pokemon",
        move: "",
        type0: "",
        type1: "",
        loading: false
      }
      this.fireAPI = this.fireAPI.bind(this);
      this.countUp = this.countUp.bind(this);
      this.countDown = this.countDown.bind(this);
      this.typeToColor = this.typeToColor.bind(this);
    
  }
  
  typeToColor(){
    if(this.state.type0 === "grass" || this.state.type1 === "grass"){
      this.setState({
        color : "green",
        energy: leafEnergy
    })}
    if(this.state.type0 === "fire" || this.state.type1 === "fire"){
      this.setState({
        color: "red",
        energy: fireEnergy
      })
    }
    if(this.state.type0 === "water" || this.state.type1 === "water"){
      this.setState({
        color: "#6FA9D2",
        energy: waterEnergy
      })
    }
    if(this.state.type0 === "normal" || this.state.type1 === "normal"){
      this.setState({
        color: "#FFFFFF",
        energy: normalEnergy
      })
    }
  }

  
  

  fireAPI(id){
    this.setState({
      
      species: "Pokemon",
      name: "",
      HP: "0",
      color: "#FFFFFF",
      energy: noEnergy,
      height: "0",
      weight: "0",
      sprite: "",
      move: "",
      about: "",
      type0: "",
      type1: "",
      loading: true
    })

    q.all([
      getPokemon(id),
      getSpecies(id)
    ])
    .then((data) => {
      const pokemon = data[0];
      const species = data[1];    
      this.setState({
        id: pokemon.id,
        name: pokemon.name,
        HP: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        sprite: pokemon.sprites.front_default,
        move: pokemon.moves[0].move.name,
        type0: pokemon.types[0].type.name,
        type1: pokemon.types[1].type.name,
        species: species.genera[2].genus,
        about: species.flavor_text_entries[1].flavor_text,
        loading: false
      })
      this.typeToColor();
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

    let cardColor = this.state.color;
    let speciesUI = this.state.species;
    let pokeballUI;
    let pokemonNumberUI;
    if(this.state.loading){
      pokeballUI = <div className="loading"><span></span></div>
      pokemonNumberUI = `pulling #${this.state.id}`;
    }else{
      pokeballUI = <span> </span>
      pokemonNumberUI = <span> </span>
    }


   
   
    return (
      <div className="pokemon-card-container">
                        <div className="color-card" style={{"background-color": `${cardColor}` }} />
            <div className="pokemon-title">
            <h1 className="pokemon-name">{this.state.name} {pokemonNumberUI} </h1>
            {/* <h1 className="pokemon-id">#{this.state.id}  </h1>  */}
            <div className="pokemone-hit-points"><h1>{this.state.HP} HP</h1> <img src={this.state.energy}/> </div>
            </div>
            

            <div className="picture-frame">
             {pokeballUI}
             <img className="pokemon-sprite" src={this.state.sprite}/>
             
            </div>
            


            <div className = "body-type">  

            <button className="btn-counter"  onClick={this.countDown.bind(this, this.state.id -1)}> - </button> 

            <h2>{speciesUI}.  Height: {this.state.height}m, Weight: {this.state.weight}kg.</h2>

            <button className="btn-counter" onClick={this.countUp.bind(this, this.state.id + 1)}> + </button>

            </div>


            <div className="attack-move">
                {this.state.move}
              <h1></h1>
            </div>
            <span className="divider"> </span>
            <div className="attack-move"></div>
            <div className="about">
                <div className="about-pokemon">{this.state.about}</div>
            </div> 

            
      </div>
    );

  }
    
}
