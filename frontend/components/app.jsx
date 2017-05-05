import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { HashRouter } from 'react-router-dom';
import TopBar from './top_bar';
import Home from './home';
import Repos from './repos';
import RepoIssues from './repo_issues';

const App = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          <TopBar />
          <div className="main-container">
            <Route path="/" component={ Home }/>
            <Route exact path="/" component={ Repos }/>
            <Route path="/repos/:repoName" component={ RepoIssues }/>
          </div>
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App;
