import { accessToken, username, githubURL, githubRepoURL } from './access';

export const getIssues = (repo) => {
  return $.ajax({
    method: 'GET',
    url: `${githubRepoURL}/${username}/${repo}/issues?state=all&filter=all&access_token=${accessToken}`
  })
}

export const createIssue = (repoName, issue) => {
  return $.ajax({
    method: 'POST',
    url: `${githubRepoURL}/${username}/${repoName}/issues?access_token=${accessToken}`,
    data: JSON.stringify(issue)
  })
}

export const updateIssue = (repoName, issue) => {
  return $.ajax({
    method: 'PATCH',
    url: `${githubRepoURL}/${username}/${repoName}/issues/${issue.number}?access_token=${accessToken}`,
    data: JSON.stringify(issue)
  })
}

export const edit = issue => {
  let repoUrl = issue.repository_url;
  let repoName = repoUrl.substr(repoUrl.lastIndexOf('/') + 1);
  let username = issue.user.login;

  const url = `https://api.github.com/repos/${username}/${repoName}/issues/${issue.number}?access_token=${token}`;

  return $.ajax({
    url,
    method: 'PATCH',
    data: JSON.stringify({
      state: issue.state,
      title: issue.title,
      body: issue.body
    })
  });
};
