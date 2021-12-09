import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  onHandleRemoveItem = () => {
    this.props.onRemoveItem(this.props.item);
  }
  render() { 
    return (  
      <>
        <span>
          {this.props.item.task}
        </span>
        <button className="btn btn-primary ml-3">Edit</button>
        <button className="btn btn-primary ml-3" onClick={this.onHandleRemoveItem}>Remove</button>
      </>
    );
  }
}
 
export default Item;