import React, { Component } from 'react'
import './App.css';
import Word from './Words'

class App extends Component {
  state = {
    words: [],
    isLoaded: false
  }

  componentDidMount() {
    setTimeout(this.fetchData, 3000)
  }

  fetchData = () => {
    fetch('data/words.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        words: data.words
      })
    })
  }

  render() {
    const words = this.state.words.map(word => (
      <Word key ={word.id} eng={word.en} pl={word.pl}/>
    ))
    return (
      <ul>
        {this.state.isLoaded ? words : "Wczytuję dane"}
      </ul>
    );
  }
}

export default App;

