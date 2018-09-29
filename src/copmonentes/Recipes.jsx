import React, { Component } from "react";

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.recipes.map(recipe => {
            return (
              <div className="col-md-4 mt-2 ">
                <div className="box ">
                  <img src={recipe.image_url} alt={recipe.title} />
                  <h3 className=" ">{recipe.title}</h3>
                  <button type="button" className="btn btn-success mt-2 ml-2">
                    SEE RECIPE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recipes;
