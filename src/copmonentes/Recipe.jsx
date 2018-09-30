import React, { Component } from "react";

import { Link } from "react-router-dom";

const API_KEY = "7390c7e600a58001fa5c48ec5a36ba7e";
const baseURL = `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/`;

class Recipe extends Component {
  state = {
    recipeState: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`${baseURL}search?key=${API_KEY}&q=${title}`);
    const res = await req.json();
    console.log(res);
    this.setState({
      recipeState: res.recipes[0]
    });
  };
  render() {
    const recipe = this.state.recipeState;
    return (
      <div className="d-flex justify-content-center  mx-5 py-5">
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
