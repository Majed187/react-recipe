import React, { Component } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Form extends Component {
  eventHandler = e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
    this.props.getRecipe(recipeName);
  };
  render() {
    return (
      <div className="container">
        <form
          className="form input-group input-group-lg my-5   "
          onSubmit={this.eventHandler}
        >
          <input
            type="text"
            className="form-control h4"
            placeholder="Enter your favorite food "
            name="recipeName"
            required
          />

          <div className="input-group-append">
            <button className="btn btn-outline-secondary " type="submit">
              <FontAwesomeIcon className=" fa-spin" icon={faSpinner} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
