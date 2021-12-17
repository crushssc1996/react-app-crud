import React from "react";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 'key1', task: 'task 1' },
        { id: 'key2', task: 'task 2'}
      ],
      editTodo: {},
    };
  }
  onHandleChangeTodoList = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item],
    });
  };
  onHandleRemoveItem = (item) => {
    this.setState({
      todoList: this.state.todoList.filter((i) => i.id !== item.id),
    });
  };
  onHandleEditItem = (item) => {
    const { editTodo, todoList } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (!isEmptyObj && editTodo.id === item.id) {
      // Save
      let todoListClone = [...todoList];
      const index = todoListClone.findIndex((i) => i.id === item.id);
      todoListClone[index].task = editTodo.task;
      this.setState({
        todoList: todoListClone,
        editTodo: "",
      });
      toast.success("Update Successly");
      return;
    }
    this.setState({
      editTodo: item,
    });
  };
  onChangeEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.task = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { todoList, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddTodo onAddItemToList={this.onHandleChangeTodoList} />
        <div className="list-item-container">
          {todoList &&
            todoList.length > 0 &&
            todoList.map((item) => {
              return (
                <div className="item-container" key={item.id}>
                  {isEmptyObj ? (
                    <span>{item.task}</span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <input
                          value={editTodo.task}
                          onChange={(e) => this.onChangeEditTodo(e)}
                        />
                      ) : (
                        <span>{item.task}</span>
                      )}
                    </>
                  )}
                  <button
                    className="btn btn-primary ml-3"
                    onClick={() => this.onHandleEditItem(item)}
                  >
                    {!isEmptyObj && editTodo.id === item.id ? "Save" : "Edit"}
                  </button>
                  <button
                    className="btn btn-primary ml-3"
                    onClick={() => this.onHandleRemoveItem(item)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Color(ListTodo);
