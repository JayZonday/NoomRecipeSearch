import React from 'react'

class SearchBar extends React.Component{

  state = {
    search: "",
    recipes: []
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
    fetch(`http://www.recipepuppy.com/api/?q=${this.state.search}`)
      .then(res => res.json())
      .then(recipes =>
        this.setState({
          recipes: recipes
      }))
      console.log(this.state.recipes.results)
    }

  render(){
    return (
      <div>
      <div className="searchbar-box">
      <input name='search' id="searchbar-input" onChange={this.onChangeHandler} placeholder="Search Recipe"></input>
      </div>
      <div className='recipe-list'>
      Recipes: {this.state.recipes.toString()}
      </div>
      </div>

    )
  }
}




export default SearchBar;
