import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon, getSpecies } from '../services/pokemon';
import '../css/card.css';
// import { getCharacteristics } from '../services/pokemon';



export default class Card extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        pokemon: {},
        species: "",
        id: 1,
        color: "",
        loading: false
      }
      this.fireAPI = this.fireAPI.bind(this);
      this.countUp = this.countUp.bind(this);
      this.countDown = this.countDown.bind(this);
      
  }


  componentDidMount(){
    getPokemon(this.state.id).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })})

    getSpecies(this.state.id).then(species => {
      this.setState({
        species: species
      })})}



  fireAPI(){
    getPokemon(this.state.id).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })})
      console.log(this.state.id)

    getSpecies(this.state.id).then(species => {
      this.setState({
        species: species
      })})
      console.log(this.state.species)
  }

  countUp(){
    
    this.setState({
      id: this.state.id + 1
    })
    this.fireAPI();
  }

  countDown(){
    
    this.setState({
      id: this.state.id - 1
    })
  
  }

  




  
  render() { 
    const species = this.state.species;
    let speciesUI;
    if (species && species.genera && species.genera[2] && species.genera[2].genus) {
       speciesUI = (this.state.species.genera[2].genus)
    } else {
       speciesUI = <div className="loading"><span></span></div>
    }
    


    // var stuff = <span></span>
    // if(this.state.species.genera !== undefined){
    //   var stuff = <h1>{this.state.species.genera[0].genus[2]}</h1>
    // } else {
    //   var stuff = <div className="loading"><span></span></div>
    // }


    // setTimeout(() => {
    //   this.setState({
    //     id: this.state.id + 1
    //   })
    // }, 20000)

    return (
      
      <div className="pokemon-card-container">
            <div className="pokemon-title">
            <h1 className="pokemon-name">{this.state.pokemon.name} </h1>
            <h1 className="pokemon-id">#{this.state.pokemon.id}  </h1> 
            </div>

            <div className="picture-frame">
             {speciesUI}
            </div>
            

           
            <div className = "body-type">  

            <button className="btn-counter" onClick={this.countDown}> - </button> 

            <h1>  Height: {this.state.pokemon.height}m Weight: {this.state.pokemon.weight}kg</h1>

            <button className="btn-counter" onClick={this.countUp}> + </button>
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
