import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Route } from 'react-router-dom';
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
              <p><a className="profile-info--details-login" href={`https://github.com/${login}`}>{login}</a></p>
              <p className="profile-info--details-login">{name}</p>
              <p>{bio}</p>
              <p><a href={`http://${blog}`}>{blog}</a></p>
              <div className="profile-info--details--followers">
                <div className="profile-info--details--followers-text">
                  <h4>Followers</h4>
                  <p className="profile-info--details-login">{followers}</p>
                </div>
                <div className="profile-info--details--followers-text">
                  <h4>Following</h4>
                  <p className="profile-info--details-login">{following}</p>
                </div>
                <div className="profile-info--details--followers-text">
                  <h4>Repos</h4>
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
        {this.renderProfileInfo()}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
