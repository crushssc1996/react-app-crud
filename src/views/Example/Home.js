import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/favicon.png';

class Home extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push('/todo')
    }, 3000)
  }

  render() {
    return (
      <>
        <div>Home page - Hello Reactjs</div>
        <did>
          <img alt="logo" src={logo} style={{ width: '200px', height: '200px', marginTop: '20px'}}/>
        </did>
      </>
    )
  }
}

// export default withRouter(Home);
export default Color(Home);