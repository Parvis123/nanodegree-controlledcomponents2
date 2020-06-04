import React, { Component } from "react";

class Form extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
