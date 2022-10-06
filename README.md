How to deploy project

1. You must write npm run build to console.
2. download gh-pages. npm install gh-pages --save-dev
3. add "homepage": "https://{your git-hub name}.io/${your git-hub repo name}" to the top of package.json,
4. Add this project to your github.
5. add two scripts into package.json into "scripts"
   1. "predeploy": "npm run build",
   2. "deploy": "gh-pages -d build"
6. copy link from "homepage", and put it in browser
