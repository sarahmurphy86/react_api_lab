import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector.js';
import CharacterDetail from '../components/CharacterDetail.js';

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters:[],
      currentCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount() {
  const url = 'http://hp-api.herokuapp.com/api/characters';
  console.log('componentDidMount');

  fetch(url)
    .then( response => response.json() )
    .then( charactersData => this.setState({characters: charactersData}) )
    .catch( err=> console.log(err) );
  }

  handleCharacterSelected(index){
    const selectedCharacter =this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }

  render() {
    return (
      <div>
        <h2>Harry Potter Characters</h2>
        <CharacterSelector characters={this.state.characters} onCharacterSelected= {this.handleCharacterSelected}/>
        <CharacterDetail character={this.state.currentCharacter}/>
      </div>
    );
  }
}

export default CharacterContainer;
