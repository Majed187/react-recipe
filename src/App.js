import React, { Component } from "react";
import Form from "./copmonentes/Form";

import Recipes from "./copmonentes/Recipes";

import axios from "axios";
const API_KEY = "7ec04121bf0cca67ad57e00b7967e8e2";
const baseURL = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/`;

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async recipeName => {
    const endPoint = `${baseURL}search?key=${API_KEY}&q=${recipeName}`;
    const data = await axios.get(endPoint);
    console.log(data);
    this.setState({
      recipes: data.data.recipes
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
