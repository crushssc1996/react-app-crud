import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      item: ''
    }
  }
  onHandleChangeItem = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  onHandleAddItem = () => {
    let data = {
      id: Math.floor(Math.random() * 1000),
      task: this.state.item
    }
    this.props.onAddItemToList(data);
  }
  addEnter = (e) => {}
  render() {
    let { item} = this.state;
    return (
      <div className="add-container">  
        <div className="form-group">
          <input type="text" 
            className="form-control" 
            value={item} 
            onChange={(e) => this.onHandleChangeItem(e)}/>
          <button className="ml-3 btn btn-primary"
              onClick={() => this.onHandleAddItem()}
              onKeyDown={(e) => this.addEnter(e)}
          >Add</button>
        </div>
      </div>
    );
  }
}
 
export default AddTodo;