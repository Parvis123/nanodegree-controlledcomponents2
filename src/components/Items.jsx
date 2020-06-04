import React, { Component } from "react";

class Items extends Component {
  render() {
    return (
      <div>
        <p className="items">Items</p>
        <ul className="item-list">
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Items;
