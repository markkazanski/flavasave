import React, { Component } from "react";
import Input from "../components/Forms/Input.js";
import NavLogged from "../components/Nav/NavLogged.js";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";
import { Link } from "react-router-dom";

class AddNewRecipe extends Component {
  state = {
    recipe_name: "",
    recipe_serving_size: "",
    recipe: {
    },
    ingredient1:"",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient0: "",
    instruction0:"",
    instruction1: "",
    instruction2: "",
    instruction3: "",
    instruction4: "",
    tag0:"",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    just_added_id: "",
    just_added_name: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    API.addManualRecipe({
      recipe_name: this.state.recipe_name,
      recipe_serving_size: this.state.recipe_serving_size,
      ingredients: [
        this.state.ingredient0,
        this.state.ingredient1,
        this.state.ingredient2,
        this.state.ingredient3,
        this.state.ingredient4
      ],
      instructions:[
        this.state.instruction0,
        this.state.instruction1,
        this.state.instruction2,
        this.state.instruction3,
        this.state.instruction4
      ],
      tags:[
        this.state.tag0,
        this.state.tag1,
        this.state.tag2,
        this.state.tag3,
        this.state.tag4
      ]
    }).then(res => {
      console.log(res);
      this.setState({
        recipe_name: "",
        recipe_serving_size: "",
        recipe: {
        },
        ingredient1:"",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient0: "",
        instruction0:"",
        instruction1: "",
        instruction2: "",
        instruction3: "",
        instruction4: "",
        tag0:"",
        tag1: "",
        tag2: "",
        tag3: "",
        tag4: "",
        just_added_id: res.data.id,
        just_added_name: res.data.name
      });
      //document.location.href = window.location.protocol + "//" + window.location.hostname;
      /*
      if(res.data.status)
            window.location.href = window.location.origin + "/recipe/" + res.data.id;
      */
    })
    .catch(err => console.log(err));

  };


  render() {
    return (
      <div>
        <NavLogged />
        <div className="editrecipe-container">
          <form>
            <h3 className="ERTitle">RECIPE NAME</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.recipe_name}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="recipe_name" />
              </div>
            </div>

            <h3 className="ERTitle">SERVING SIZE</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.recipe_serving_size}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="recipe_serving_size" />
              </div>
            </div>

            <h3 className="ERTitle">INGREDIENTS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.ingredient0}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient0" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.ingredient1}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient1" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.ingredient2}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient2" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.ingredient3}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient3" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.ingredient4}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="ingredient4" />
              </div>
            </div>

            <h3 className="ERTitle">INSTRUCTIONS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.instruction0}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction0" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.instruction1}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction1" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.instruction2}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction2" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.instruction3}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction3" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.instruction4}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="instruction4" />
              </div>
            </div>

            <h3 className="ERTitle">TAGS</h3>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.tag0}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag0" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.tag1}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag1" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.tag2}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag2" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.tag3}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag3" />
              </div>
            </div>
            <div className="row">
              <div className="recipe-page-col col-sm-12">
                <Input
                  value={this.state.tag4}
                  onChange={this.handleInputChange}
                  className="ERInput"
                  name="tag4" />
              </div>
            </div>
            <button
              onClick={this.handleFormSubmit}
              className="btn recipe-add-button"
              type="button">SUBMIT</button>
          </form>

          {this.state.just_added_id ? (<p className="just-added-recipe-text">Just Added: {" "}
              <Link className="just-added-recipe-link" to={"/recipe/" + this.state.just_added_id}>
                {this.state.just_added_name}
              </Link>
            </p>) : (
              <span></span>
          )}
        </div>
        <FooterLogged />
      </div>
    );
  }
}

export default AddNewRecipe;