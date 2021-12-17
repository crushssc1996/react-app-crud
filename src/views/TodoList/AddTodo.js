import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  onHandleChangeItem = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  onHandleAddItem = () => {
    if (!this.state.task) {
      toast.warning("This field is mandatory");
      return;
    }
    let data = {
      id: Math.floor(Math.random() * 1000),
      task: this.state.task,
    };
    this.props.onAddItemToList(data);
    this.setState({
      task: "",
    });
    toast.success("Wowwwwwwww");
  };
  addEnter = (e) => {};
  render() {
    let { task } = this.state;
    return (
      <div className="add-container">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => this.onHandleChangeItem(e)}
          />
          <button
            className="ml-3 btn btn-primary"
            onClick={() => this.onHandleAddItem()}
            onKeyDown={(e) => this.addEnter(e)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
