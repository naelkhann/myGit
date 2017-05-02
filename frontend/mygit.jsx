import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store';
import * as GitHubAPIUtil from './util/user_util';
import * as GitHubIssueUtil from './util/issues_util';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  window.getUser = GitHubAPIUtil.getUser;
  window.getRepos = GitHubAPIUtil.getRepos;
  window.getIssues = GitHubIssueUtil.getIssues;
  window.getRepo = GitHubAPIUtil.getRepo;
  window.createIssue = GitHubIssueUtil.createIssue;
  window.updateIssue = GitHubIssueUtil.updateIssue;
  window.store = configureStore();
  ReactDOM.render(<App store={ configureStore() } />, app)
})
