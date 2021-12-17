import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';

class Home extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push('/todo')
    }, 3000)
  }

  render() {
    return (
      <div>Home page - Hello Reactjs</div>
    )
  }
}

// export default withRouter(Home);
export default Color(Home);