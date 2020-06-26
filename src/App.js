import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "George",
      todoItems: [
        { action: "Walk the Dog", done: false },
        { action: "Have Breakfast", done: false },
        { action: "Call Favour", done: true },
        { action: "Check social media", done: false },
      ],
      newItemText: "",
    };
  }

  updateNewItemValue = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(
        (item) => item.action === this.state.newItemText
      )
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false },
        ],
        newItemText: "",
      });
    }
  };

  // Using the fat arrow syntax to define the render function
  render = () => (
    <div>
      <h4 className="bg-primary text-white text-center p2">
        {this.state.userName}'s To Do list (
        {this.state.todoItems.filter((t) => !t.done).length} items to do)
      </h4>
      <div className="container-fluid">
        <div className="my-2">
          <input
            className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewItemValue}
          />
          <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
            Add New Todo
          </button>
        </div>
      </div>
    </div>
  );

  // Using the conventional javascript method to define the render function
  /*render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p2">
          {this.state.userName}'s To Do list
        </h4>
        <button
          className="btn btn-primary p2 m2"
          onClick={this.changeStateData}
        >
          Change
        </button>
      </div>
    );
  }
  */
}
