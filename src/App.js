import React, { Component } from "react";
import Form from "./copmonentes/Form";

const API_KEY = "7390c7e600a58001fa5c48ec5a36ba7e";
const baseURL = `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/`;

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async recipeName => {
    try {
      const endPoint = `${baseURL}search?key=${API_KEY}
&q=${recipeName}%20`;

      const api = await fetch(endPoint);
      const data = await api.json();

      this.setState({
        recipes: data.recipes
      });
      console.log(this.state.recipes);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className=" container App">
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map(recipe => {
          return <p key={recipe.recipe_id}>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
