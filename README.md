## myGit

### myGit is a presentation layer for you to view your GitHub repos and issues. See your profile, create issues, edit existing issues, and find all your GitHub repos in one place!

### How To Use:
myGit uses access tokens from your GitHub profile. To create an access token, use [this link](https://github.com/settings/tokens) to view the Personal Access Token page on Github.com. Creating a token will generate a "password"-like access token that you must use for myGit to utilize your profile.

### Design Choices:
- `combineReducers` used from Redux in case future updates require multiple reducers to handle different slices of application state.
- `util/user_util.js` handles AJAX requests to GitHub API. The AJAX requests return Promise-like objects, which allow us to maintain async requests for information and subsequently render React components with information that is fetched with the `then` success callback.

### Future Updates:
- OAuth2 implementation
- Login form at application load (would allow you to "sign in" or "sign out")
- CSS transitions on profile load
