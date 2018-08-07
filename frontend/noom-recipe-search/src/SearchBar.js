import React from 'react'

class SearchBar extends React.Component{

  state = {
    search: " ",
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
          recipes: recipes.results
      }))
      console.log(this.state.recipes)
    }

  render(){
    const recipes = this.state.recipes.map((recipe) => {
      return <div className="recipe-card"> <h3 id="rec-title">{recipe.title}</h3> <h5 id='rec-link'>{recipe.href}</h5> {recipe.ingredients} </div>
    });
    return (
      <div>
      <div className="searchbar-box">
        <input name='search' id="searchbar-input" onChange={this.onChangeHandler} placeholder="Search Keyword in Recipe"></input>
      </div>
      <div className='recipe-list'>
        {recipes}
      </div>
      </div>

    )
  }
}




export default SearchBar;
