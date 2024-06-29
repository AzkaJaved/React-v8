# React-v8

react practice
setting up a react project.
1-created a folder adopt me
2-created src inside it , and then created index.html style.css and put some old react.createElement function calls inside it.
3-After that initialized an npm project using "npm init -y" command
npm i -D prettier@2.7.1
4-After installing pretier configure it in base of your project by creating .prettierc file
5- setup esLint...npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0
set up .eslintrc.json
npm run lint -- --debug
6-setup vite project using command(bundling react in our project)
npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0
npm i react@18.2.0 react-dom@18.2.0
7-up untill now eslint does not understands jsx
npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8
8-setup eslint rules for hooks:
npm install -D eslint-plugin-react-hooks@4.6.0
!!... !! ... !! ...!! ...!! ...!!setup complete !!... !! ...!! ...!!...!!...!!
install react-router-dom
... !!...!!... !!...!!...!!...!!...!!
useParams provides us with searchParams in our url ...these search params are available to us in context by BrouserRouter
hardest part about react is use-effect ...so using react query will remove useEffect from your react code reqct query will basically handle all the api requests for you.
React query will handle and cache all the api request for you ...react query caches all the request in memory.React Query is a JavaScript library designed to simplify the complex task of data fetching and caching in React applications.
install react query ... npm install @tanstack/react-query@4.10.1
!!...!!...!!...!!...!!...!!...!!
1- instantiate query provide
2-
