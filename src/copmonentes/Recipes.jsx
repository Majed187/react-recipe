import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => {
  console.log(props.recipes);
  return (
    <div className="container">
      <div className="row">
        {props.recipes &&
          props.recipes.map(recipe => {
            return (
              <div key={recipe.recipe_id} className="col-md-4 mt-2 ">
                <div className="box ">
                  <img src={recipe.image_url} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                  <button type="button" className="btn btn-success mt-2 ml-2">
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: {
                          recipe: recipe.title
                        }
                      }}
                    >
                      SEE RECIPE
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recipes;
