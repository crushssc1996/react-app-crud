import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class DetailUser extends React.Component {

  state = {
    user: {}
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      })
    }
    catch {
      throw Error;
    }
  }

  onHandleBackUserList() {
    this.props.history.push('/user');
  }

  render() { 
    let { user } = this.state
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        {!isEmptyObj && 
          <>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email} </p>
            <p>
              <img alt={user.first_name} src={user.avatar} />
            </p>
            <button onClick={() => this.onHandleBackUserList()}>Back</button>
          </>
        }
      </>
     
    )
  }
}
 
export default withRouter(DetailUser);