import React, { Component } from "react";

export class TodoBanner extends Component {
  render = () => (
    <h4 className="text-white text-center p2 todo-banner">
      To Do list ({this.props.tasks.filter((t) => !t.done).length} items to do)
    </h4>
  );
}
