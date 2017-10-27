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
        color: ""
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
      })})
}



  fireAPI(){
    getPokemon(this.state.id).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })})

    getSpecies(this.state.id).then(species => {
      this.setState({
        species: species
      })})
  }

  countUp(){
    console.log(this.state.id);
    this.setState({
      id: this.state.id + 1
    })
    this.fireAPI();
  }

  countDown(){
    console.log(this.state.id);
    this.setState({
      id: this.state.id - 1
    })
  
  }




  
  render() {
    console.log(this.state.pokemon.results)
    let stuff = <h1>stuff</h1>
    let pokemon = <h1></h1>
    if(this.state.species.genera !== undefined){
        pokemon = this.state.pokemon.results.map((element)=>{
          return <h1>{element.name}</h1>
        })
    }
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
              
              {stuff}
            </div>
            

           
            <div className = "body-type">  

            <button className="btn-counter" onClick={this.countDown}> - </button> 

            <h1> Height: {this.state.pokemon.height}m Weight: {this.state.pokemon.weight}kg</h1>

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


            
        {pokemon}
      </div>
    );
  }
}







var stuff = <div className="loading"><span></span></div>
if(this.state.species.genera !== undefined){
  var stuff = <h1>{this.state.species.genera.genus}</h1>
} else {
  var stuff = <div className="loading"><span></span></div>
  
}

const PokemonSpecies = this.state.species
if(this.state.species.genera.genus === undefined){
  const PokemonSpecies = <div className="loading"><span></span></div>
} else {
  const PokemonSpecies = <h1>{this.state.species.genera[0].genus[2]}</h1>
}



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


  // componentDidMount(){
  //   getPokemon(this.state.id).then(pokemon => {
  //     this.setState({
  //       pokemon: pokemon
  //     })})

  //   getSpecies(this.state.id).then(species => {
  //     this.setState({
  //       species: species
  //     })})}

      

  checkData(){
    if(this.state.name && this.state.id && this.state.species) {
      this.setState({
        loading: false
      })
    }
  }

  fireAPI(){
    this.setState({
      loading: true,
      name: "",
      id: "",
      species: ""
    })
    getPokemon(this.state.id).then(pokemon => {
      this.setState({
        name: pokemon.name,
        id: pokemon.id
      }, this.checkData)
    })

    getSpecies(this.state.id).then(species => {
      if (species && species.genera && species.genera[2] && species.genera[2].genus) {
      this.setState({
        species: species.genera[2].genus
      }, this.checkData)
      }
    })
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
    let speciesUI;
    if(this.state.loading){
      speciesUI = <div className="loading"><span></span></div>
    }else{
      speciesUI = this.state.species
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
            <h1 className="pokemon-name">{this.state.name} </h1>
            <h1 className="pokemon-id">#{this.state.id}  </h1> 
            </div>

            <div className="picture-frame">
             {speciesUI}
            </div>
            

           
            <div className = "body-type">  

            <button className="btn-counter" onClick={this.countDown}> - </button> 

            <h1>  Height: {this.state.height}m Weight: {this.state.weight}kg</h1>

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
