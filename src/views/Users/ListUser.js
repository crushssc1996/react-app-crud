import React from 'react';
import axios from 'axios';
import './ListUser.scss';

class ListUser extends React.Component {

  // componentDidMount() {
  //   axios.get('https://reqres.in/api/users?page=1')
  //     .then(res => {
  //       console.log('res', res.data.data);
  //     })
  // }

  state = {
    listUsers: []
  }

  async componentDidMount() {
    let res = await  axios.get('https://reqres.in/api/users?page=1')
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  render() { 
    let { listUsers } = this.state
    return (
      <div className="list-user-container">
        <div className="title">
          Fetch all list users
        </div>
        <div className="list-user-content">
          {listUsers && listUsers.length > 0 && 
            listUsers.map((item, idx) => {
              return (
                <div className="child" key={item.id}>{idx + 1} - {item.first_name} - {item.last_name}</div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
 
export default ListUser;