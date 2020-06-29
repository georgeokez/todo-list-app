import React, { Component } from "react";
import { TodoCreator } from "./components/TodoCreator.js";
import { TodoRow } from "./components/TodoRow.js";
import { TodoBanner } from "./components/TodoBanner.js";

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
      //newItemText: "",
    };
  }

  updateNewItemValue = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }],
      });
    }
  };

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoTableRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
    ));

  // Using the fat arrow syntax to define the render function
  render = () => (
    <div className="row container-fluid mt-3">
      <div className="w-50 mx-auto">
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />

        <TodoCreator callback={this.createNewTodo} />

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows()}</tbody>
        </table>

        {/* <div className="mt-5 m-2">
          <p>Uncompleted Todo's</p>
          <hr />
          <ol>
            {this.state.todoItems
              .filter((todoItem) => todoItem.done === false)
              .map((uncompletedTodo) => (
                <li key={uncompletedTodo.action}>{uncompletedTodo.action}</li>
              ))}
          </ol>
        </div> */}

        {/* <div className="m-2">
          <p>Completed Todo's</p>
          <hr />
          <ol>
            {this.state.todoItems
              .filter((todoItem) => todoItem.done === true)
              .map((completedTodo) => (
                <li key={completedTodo.action}>{completedTodo.action}</li>
              ))}
          </ol>
        </div> */}
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
