import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#FFF';
let defaultStyle = {
  color: defaultTextColor
}


class Aggreate extends Component {
  render() {
    return (
      <div styles = {{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2 style = {{color: defaultTextColor}}>Number Test</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div style = {{...defaultTextColor}}>
        <img />
        <input type = "text" />
        Filter
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style = {{...defaultStyle, width: "25%", display: "inline-block"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    ) 
  }
}


class App extends Component {
  render() {
    let name = 'David'
    let green = '#FF1212'
    let headerStyle = {color: green, 'font-size': '50px'}
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggreate />
        <Aggreate />
        <Filter />
        <Playlist /> 
        <Playlist />
        <Playlist />
        <Playlist /> 
      </div>
    );
  }
}

export default App;
