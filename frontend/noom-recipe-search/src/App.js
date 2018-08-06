import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Noom Recipe Search</h1>
        </header>
        <p className="App-intro">
          Start typing and make a simple recipe search!
        </p>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
