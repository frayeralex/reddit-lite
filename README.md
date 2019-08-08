Reddit-Lite
==============
[![Build Status](https://travis-ci.org/frayeralex/reddit-lite.svg?branch=master)](https://travis-ci.org/frayeralex/reddit-lite)
[![Coverage Status](https://coveralls.io/repos/github/frayeralex/reddit-lite/badge.svg?branch=master)](https://coveralls.io/github/frayeralex/reddit-lite?branch=master)
## Project structure

    .
    ├── build                       # Compiled files
    ├── public                      # static assets
    ├── README.md                 
    ├── coverage                    # Test coverage data
    ├── jsconfig.json               # Cpnfig src folder
    ├── .travis.yml                 # Travice CI config
    ├── yarn.lock                   # lock file
    ├── package.json                # npm package data
    ├── .env                        # for add env variables, should starts with REACT_APP_* -prefix
    └── src                         # Source files (alternatively `lib` or `app`)
        ├── __fixtures__            # Data fixtures
        └── components
            └── Post
                ├── __shanshot__    # Folder with test shapshots
                ├── Post.js         # React.js component
                ├── Post.scss       # Component styles
                ├── Post.test.js    # Component tests
            └── index.js            # export components as modul
        ├── config                  # Define main app configuration
        ├── containers              # Store statefull components
        ├── images                  # Store common used assets
        ├── pages                   # Store pages (routes) 
        ├── pages                   # Main templates like "Layout"
        ├── services                # Store Services modules
        └── store                   
            └── module              # Store Module
                ├── types.js        # Module constats
                ├── reducer.js      # Module reduser
                ├── reducer.test.js     
                ├── actions.js      # Module actions sync/async
                ├── actions.test.js 
                └── index.js        # export components as modul
            ├── store.js            # Config Redux store
            └── index.js            # Export sub store Module
        ├── utils                   # Store utilites, helpers, middlewares modules
        └── index.js                # Main js file (entry file)

### Project setup

Run following command

`git clone git@github.com:frayeralex/reddit-lite.git` 

`cd reddit-lite`

`yarn or npm install`

### Available Scripts

In the project directory, you can run:

### `npm start` 
Open [http://localhost:3000](http://localhost:3000) 

### `npm test`
### `npm test:unit`
### `npm test:watch`
### `npm test:e2e`
### `npm run coveralls`
### `npm run cypress`
### `npm run build`
### `npm run eject`

### `npm run prettier`
### `npm run eslint`
Code style lint format commands

### `npm run analyze`
Visualization util for analyze bundle size

### `npm run generact`
Helper util for creating skeleton of React component

### Imports aliases

You can use aliases for import modules
```javascript
import { Post } from "components";
```
instead of 
```jsinjade
import Post from '../../../components/Post/Post'
```

### 3rd party libraries

- `redux` - library for App state management
- `react-redux` - Bind React components with Redux 
- `redux-thunk` - Redux async middleware
- `react-router-dom` - routing
- `connected-react-router` - use for managing browser history with redux
- `history` - browser history module
- `moment` - date management library
- `axios` - http client library

### Git hooks

There are two main hooks setup
- `pre-commit` - will run prettier to fix code style issues in staged files
- `pre-push` - will run tests, and prevent pushing if test failed

### Building project

Run following command
### `npm run build`

Project build will store in `build/` folder

    build/
    ├── index.html                      
    ├── manifest.json                      
    ├── service-worker.js               
    ├── ...               
    └── static                   
        └── js 
            ├── main[hash].chunk.js             
            ├── main[hash].chunk.js.map            
            └── ...[hash].chunk.js
        ├── css    
            ├── main[hash].chunk.css             
            ├── main[hash].chunk.css.map             
            └── ...[hash].chunk.css
        └── assets                  
            └── ...[hash].chunk.png         
