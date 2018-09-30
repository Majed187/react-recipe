import React, { Component } from "react";
import Form from "./copmonentes/Form";

import Recipes from "./copmonentes/Recipes";

const API_KEY = "969e30909b4857ca9a32db801b10ed89";
const baseURL = `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/`;

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async recipeName => {
    const endPoint = `${baseURL}search?key=${API_KEY}
&q=${recipeName}`;

    const api = await fetch(endPoint);
    const data = await api.json();

    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className=" container App">
        <h1 className="mt-5 text-center text-white ">
          Search your favorite Food
        </h1>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
