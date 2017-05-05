## myGit

### myGit is a presentation layer for you to view your GitHub repos and issues. See your profile, create issues, edit existing issues, and find all your GitHub repos in one place!

### How To Use:
myGit uses access tokens from your GitHub profile. To create an access token, use [this link](https://github.com/settings/tokens) to view the Personal Access Token page on Github.com. Creating a token will generate a "password"-like access token that you must use for myGit to utilize your profile. In the future, oAuth and an interface for signing in will be implemented to allow user to skip these more technical steps.

- After generating a token, copy your access token to clipboard (IMPORTANT: This will only be visible once after creating the token, so save a copy of it).
- Run `npm install` in a terminal window that is in the myGit directory path.
- Open the `util/access.js` file in your favorite text editor.
- Paste your access token in the variable `accessToken`. Type in your GitHub username in the `username` variable. You may close your text editor.
- Run `webpack -w` in your terminal window to package all JavaScript files and dependencies.
- Run `open index.html` to open a new browser window to use myGit!

### Design Choices:
- `combineReducers` used from Redux in case future updates require multiple reducers to handle different slices of application state.
- `util/user_util.js` handles AJAX requests to GitHub API. The AJAX requests return Promise-like objects, which allow us to maintain async requests for information and subsequently render React components with information that is fetched with the `then` success callback.
- `util/issues_util.js` handles AJAX requests to fetch user's issues from GitHub API.
- A `thunk` middleware was manually coded to interpret function actions that are passed to the reducer. This allows us to chain responses from our AJAX fetches with actions to manipulate our Redux application state.
- All custom CSS was written for myGit. The application takes a Google Material Design like approach. In a more scalable version of the application, Sass would definitely be used for more modularity and extensibility (e.g Sass mixins for reusable CSS throughout app).

### Future Updates:
- OAuth2 implementation
- Login form at application load (would allow you to "sign in" or "sign out")
- CSS transitions on profile load
