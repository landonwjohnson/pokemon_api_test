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
        type: "",
        loading: false
      }
      this.fireAPI = this.fireAPI.bind(this);
      this.countUp = this.countUp.bind(this);
      this.countDown = this.countDown.bind(this);
      this.typeToColor = this.typeToColor.bind(this);
      
  }
  
  typeToColor(){
    if(this.state.type0 === "grass"){
      this.setState({
        color : "#97CF82"
    })}
    if(this.state.type1 === "fire"){
      this.setState({
        color: "#D36252"
      })
    }
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
      type0: "",
      type1: ""
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
      this.typeToColor()      
      this.setState({
        species: species.genera[2].genus,
        about: species.flavor_text_entries[1].flavor_text,
        id: pokemon.id,
        name: pokemon.name,
        HP: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        sprite: pokemon.sprites.front_default,
        type0: pokemon.types[0].type.name,
        type1: pokemon.types[1].type.name,
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
      <div className="pokemon-card-container" style={{"background-color": `${cardColor}` }}>
            <div className="pokemon-title">
            <h1 className="pokemon-name">{this.state.name} {pokemonNumberUI} </h1>
            {/* <h1 className="pokemon-id">#{this.state.id}  </h1>  */}
            <h1 className="pokemone-hit-points">{this.state.HP} HP</h1>
            </div>

            <div className="picture-frame">
             {pokeballUI}
             <img className="pokemon-sprite" src={this.state.sprite}/>
             <h4>{this.state.type0}</h4>
             <h4>{this.state.type1}</h4>
            </div>
            


            <div className = "body-type">  

            <button className="btn-counter"  onClick={this.countDown.bind(this, this.state.id -1)}> - </button> 

            <h2>{speciesUI}.  Height: {this.state.height}m, Weight: {this.state.weight}kg.</h2>

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
                <div className="about-pokemon">{this.state.about}</div>
            </div> 
      </div>
    );
  }
}
