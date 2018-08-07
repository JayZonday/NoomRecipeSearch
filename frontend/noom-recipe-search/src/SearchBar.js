import React from 'react'
import _ from 'lodash';
class SearchBar extends React.Component{

  constructor(props) {
    super(props);
    this.onChangeHandler = _.debounce(this.onChangeHandler, 500);
  }


  state = {
    search: " ",
    recipes: []
  }

  onChangeHandler = (search) => {

    // const search = e.target.value;

    if(!search) return;
    console.log(search)
    console.log(this.state)
    fetch(`http://www.recipepuppy.com/api/?q=${search}`)
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
        <input name='search' id="searchbar-input" onChange={ e => this.onChangeHandler(e.target.value) } placeholder="Search Keyword in Recipe"></input>
      </div>
      <div className='recipe-list'>
        {recipes}
      </div>
      </div>

    )
  }
}




export default SearchBar;
