import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/favicon.png';
import { connect } from 'react-redux';
class Home extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push('/todo')
    }, 3000)
  }

  onHandleDeleteUser(user) {
    this.props.onDeleteUser(user);
  }

  onHandleAddUser() {
    this.props.onAddUser();
  }
  
  render() {
    console.log('>> props: ', this.props.dataRedux)
    let users = this.props.dataRedux;
    return (
      <>
        <div>HOME PAGE - Hello Reactjs</div>
        <img alt="logo" src={logo} style={{ width: '20px', height: '20px', marginTop: '20px'}}/>
        {users && users.length > 0 &&
          users.map((item, idx) => {
            return (
              <div key={item.id}>
                {idx + 1} - { item.name } ------ 
                <span onClick={() => this.onHandleDeleteUser(item)}>X</span>
              </div>
            )
          })
        }
        <div>
          <button onClick={() => this.onHandleAddUser()}>Add New</button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (user) => dispatch({ type: 'DELETE_USER', user}),
    onAddUser: () => dispatch({ type: 'ADD_USER'})
  }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));