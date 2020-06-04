import React, { Component } from "react";

class AddItem extends Component {
  inputIsEmpty = () => {
    return this.props.value === "";
  };

  render() {
    return (
      <button onClick={this.props.addItem} disabled={this.inputIsEmpty()}>
        Add
      </button>
    );
  }
}

export default AddItem;
