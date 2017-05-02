import { accessToken, username, githubURL, githubRepoURL } from './access';

export const getUser = () => {
  return $.ajax({
    method: 'GET',
    url: `${githubURL}/${username}?access_token=${accessToken}`
  })
}

export const getRepos = () => {
  return $.ajax({
    method: 'GET',
    url: `${githubURL}/${username}/repos?sort=updated?access_token=${accessToken}`
  })
}

export const getRepo = (repo) => {
  return $.ajax({
    method: 'GET',
    url: `${githubRepoURL}/${username}/${repo}?access_token?${accessToken}`
  })
}
