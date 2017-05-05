import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user
})

class TopBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-logo">
          <img src="./assets/images/myGitLogo.png" alt="myGit Logo"/>
        </div>
        <div className="top-bar-info">
          <h4>Welcome to myGit.</h4>
          <p>You are signed in as {this.props.user.login}</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(TopBar);
