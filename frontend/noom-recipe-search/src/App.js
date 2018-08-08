import React from 'react';
import './App.css';
import SearchBar from './SearchBar'

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://dancingwithfruitcake.files.wordpress.com/2018/06/noom.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Recipe Hunter</h1>
        </header>
      <div id="searchbox">
        <p className="App-intro">
          Making recipe searches even easier!
        </p>
        <SearchBar/>
      </div>
      </div>
    );
  }
}

export default App;
