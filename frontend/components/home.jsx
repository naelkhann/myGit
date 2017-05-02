import React from 'react';
import { connect } from 'react-redux';
import { requestUser } from '../actions/user_actions.js';
import Repos from './repos';

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  requestUser: () => dispatch(requestUser()),
})

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestUser();
  }

  renderProfileInfo(){
    if (Object.keys(this.props.user).length === 0){
      return (
        <div className="profile-info">
          <h3>There was no profile loaded. Check access.js in app directory.</h3>
        </div>
      )
    } else {
      const {avatar_url, blog, html_url, bio, name, login, followers, following, public_repos} = this.props.user;
      return (
        <div className="profile-info">
          <div className="profile-info--container">
            <img className="profile-info--pic" src={avatar_url} alt={`${name} Profile Pic`}/>
            <div className="profile-info--details">
              <p className="profile-info--details-login">{login}</p>
              <p className="profile-info--details-login">{name}</p>
              <p>{bio}</p>
              <p><a href={`http://${blog}`}>{blog}</a></p>
              <div className="profile-info--details--followers">
                <div className="profile-info--details--followers-text">
                  <h4>Followers:</h4>
                  <p className="profile-info--details-login">{followers}</p>
                </div>
                <div className="profile-info--details--followers-text">
                  <h4>Following:</h4>
                  <p className="profile-info--details-login">{following}</p>
                </div>
                <div className="profile-info--details--followers-text">
                  <h4>Repos:</h4>
                  <p className="profile-info--details-login">{public_repos}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render(){
    const user = this.props.user

    return (
    <div>
      <div className="top-bar">
        <div className="top-bar-logo">
          <img src="./assets/images/myGitLogo.png" alt="myGit Logo"/>
        </div>
        <div className="top-bar-info">
          <h4>Welcome to myGit.</h4>
          <p>You are signed in as {user.name}</p>
        </div>
      </div>
      {this.renderProfileInfo()}
      <Repos user={user}/>
    </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
