import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { requestRepos } from '../actions/user_actions';
import RepoIssues from './repo_issues';


const mapStateToProps = state => ({
  repos: state.repos
})

const mapDispatchToProps = dispatch => ({
  requestRepos: () => dispatch(requestRepos())
})

class Repos extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestRepos();
  }

  filterRepos(){
    const repos = this.props.repos;
    const repoInfos = [];
    for (let i in repos){
      repoInfos.push(
        {
        name: repos[i].name,
        description: repos[i].description,
        language: repos[i].language,
        stars: repos[i].stargazers_count,
        issuesCount: repos[i].open_issues_count
        }
      )
    }

    return repoInfos;
  }

  render(){
    const user = this.props.user
    const repos = this.filterRepos();
    let reposDivs = repos.map((repo, idx) => {
      return (
        <div key={idx} className="repo-container">
          <div className="repo-left">
            <div className="repo-info">
              <h3>{repo.name}</h3>
              <h4>{repo.description}</h4>
            </div>
            <div className="repo-stats">
              <h4>{repo.language}</h4>
              <h4><i className="fa fa-star"></i> {repo.stars}</h4>
              <h4><i className="fa fa-exclamation-circle"></i> {repo.issuesCount}</h4>
            </div>
          </div>
          <div className="repo-right">
            <RepoIssues repoName={ repo.name }/>
          </div>
        </div>
      )
    })

    return (
      <div className="repos">
        <h2>{`${user.name}'s`} Repositories</h2>
        {reposDivs}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Repos))
