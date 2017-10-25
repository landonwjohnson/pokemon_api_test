import React from 'react';
import ReactDOM from 'react-dom';
import { getPokemon } from '../services/pokemon';
import '../css/card.css';
// import { getCharacteristics } from '../services/pokemon';



export default class Card extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        pokemon: {},
        id: 1
      }

      this.countUp = this.countUp.bind(this);
      this.countDown = this.countDown.bind(this);
  }


  countUp(){
    this.setState({
      id: this.state.id + 1
    })
  }

  countDown(){
    this.setState({
      id: this.state.id - 1
    })
  }


  componentDidMount(){
    getPokemon(this.state.id).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
  })

  }
  render() {

    // setTimeout(() => {
    //   this.setState({
    //     id: this.state.id + 1
    //   })
    // }, 20000)

    return (
      <div className="pokemon-card-container">
            <div className="pokemon-title">
            <h1 className="pokemon-name">{this.state.pokemon.name} </h1>
            {/* <h1 className="pokemon-id">#{this.state.pokemon.id}  </h1> */}
            {<h1 className="pokemon-id">#<input type="number" value={this.state.id}/>  </h1>}
            </div>

            <div className="picture-frame">
              <button onClick={this.countDown}> - </button>
              <button onClick={this.countUp}> + </button>
            </div>
            
       
           
            <div className = "body-type">        
            <h1>Height: {this.state.pokemon.height}m Weight: {this.state.pokemon.weight}kg</h1>
            </div>
            <div className="attack-move"></div>
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
