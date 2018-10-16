import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "7ec04121bf0cca67ad57e00b7967e8e2";
const baseURL = `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/`;

class Recipe extends Component {
  state = {
    recipeState: []
  };

  mounted = false;

  getRecipe = async () => {
    const title = this.props.location.state.recipe;
    const data = await axios(`${baseURL}search?key=${API_KEY}&q=${title}`);

    if (this.mounted) {
      this.setState({ recipeState: data.data.recipes[0] });
    }
  };

  componentDidMount = props => {
    this.mounted = true;
    this.getRecipe();
  };
  componentWillUnmount = () => {
    this.mounted = false;
  };

  render() {
    const recipe = this.state.recipeState;

    return (
      <div className="d-flex justify-content-center recipe  mx-5 py-5">
        <div className="">
          <img
            className="recipe_img"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <h1 className="mb-3 ">{recipe.title}</h1>
          <h2 className="mb-3">Puplicher : {recipe.publisher}</h2>
          <h3>
            Website : <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
          </h3>
          <button type="button" className="btn btn-success mt-2 ml-2">
            <Link to="/"> GO Home!!!!</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default Recipe;
