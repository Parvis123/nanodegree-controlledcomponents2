import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DeleteLastItem from "./components/DeleteLastItem";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    value: "",
    items: [],
  };

  deleteLastItem = (event) => {
    this.setState((prevState) => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addItem = (event) => {
    event.preventDefault();
    this.setState((oldState) => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  render() {
    const { items, value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <Form value={value} handleChange={this.handleChange} />
        <AddItem value={value} addItem={this.addItem} />
        <DeleteLastItem
          deleteLastItem={this.deleteLastItem}
          buttonDisabled={this.noItemsFound()}
        />
        <Items items={items} />
      </div>
    );
  }
}

export default App;
