import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Home from './home';
import RepoIssues from './repo_issues';

const App = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          <Route path="/" component={ Home }/>
          <Route path="/repo/:repoName" component={ Home }/>
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App;
