import React from "react";
import "./style.css";

//Custom Form class (easier to handleInputChange & handleFormSubmit)
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend2">
              <i className="fa fa-book"></i>
            </span>
          </div>
          <input
            className="form-control"
            id="Title"
            type="text"
            value={q}
            placeholder="Lord of the Rings"
            name="q"
            onChange={handleInputChange}
            required
          ></input>
        </div>
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-outline-primary float-right"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;