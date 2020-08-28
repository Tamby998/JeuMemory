import React, {Component} from 'react'

import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  handleCardClick(card){
    console.log(card, 'clicked')
  }
  render(){
    const won = new Date().getSeconds() % 2 === 0
    return (
    <div className = "memory">
      <GuessCount guesses={0} />
      <Card card="😁" feedback="hidden" onClick={this.handleCardClick} />
      <Card card="❤" feedback="justMatched" onClick={this.handleCardClick} />
      <Card card="😎" feedback="justMismatched" onClick={this.handleCardClick} />
      <Card card="😭" feedback="visible" onClick={this.handleCardClick} />
      <Card card="🚑" feedback="hidden" onClick={this.handleCardClick} />
      {won && <p>Gagne ! </p> }
    </div>
    )
  }
}
export default App
