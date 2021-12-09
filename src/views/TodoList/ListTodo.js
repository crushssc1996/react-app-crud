import React from 'react';
import AddTodo from './AddTodo';
import ListItem from './ListItem';
import './ListTodo.scss';

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      todoList: []
    }
  }
  onHandleChangeTodoList = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item]
    })
  }
  onHandleRemoveItem = (item) => {
    console.log('aaa', item);
    this.setState({
      todoList: this.state.todoList.filter(i => i.id !== item.id)
    })
  }
  render() {
    let { todoList } = this.state;
    return (  
      <div className="list-todo-container">
        <AddTodo
          onAddItemToList={this.onHandleChangeTodoList} />
        <ListItem 
          todoList={todoList} 
          onRemove={this.onHandleRemoveItem}/>
      </div>
    );
  }
}
 
export default ListTodo;