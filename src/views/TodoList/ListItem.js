import React from 'react';
import Item from './Item';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  onHandleRemoveItem = (item) => {
    this.props.onRemove(item);
  }
  render() {
    let { todoList } = this.props;
    return ( 
      <div className="list-item-container">
        {todoList && todoList.length > 0 && 
          todoList.map((item) => {
            return (
              <div className="item-container" key={item.id}>
                <Item 
                  item={item} 
                  onRemoveItem={this.onHandleRemoveItem}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}
 
export default ListItem;