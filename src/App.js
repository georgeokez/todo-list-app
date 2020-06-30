import React, { Component } from "react";
import { TodoCreator } from "./components/TodoCreator.js";
import { TodoRow } from "./components/TodoRow.js";
import { TodoBanner } from "./components/TodoBanner.js";
import { VisibilityControl } from "./components/VisibilityControl.js";

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
      showCompleted: true,
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

  todoTableRows = (doneValue) =>
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      ));

  showToDoTable = (doneValue) => (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>{this.todoTableRows(doneValue)}</tbody>
    </table>
  );

  // Using the fat arrow syntax to define the render function
  render = () => (
    <div className="row container-fluid mt-3">
      <div className="w-50 mx-auto">
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />

        <TodoCreator callback={this.createNewTodo} />

        {this.showToDoTable(false)}

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Show Completed Tasks"
            isChecked={this.state.showCompleted}
            callback={(checked) => this.setState({ showCompleted: checked })}
          />
        </div>

        {this.state.showCompleted && this.showToDoTable(true)}
      </div>
    </div>
  );
}
