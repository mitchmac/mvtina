// barebones Next.js setup
- npm init
- npm i --save next react react-dom
- update scripts in package.json
- create pages/index.js file
- create default page component with a title
- run 'npm run dev'
- go to http://localhost:3000, success!
- fetch the title value from getStaticProps



// skip to here if familiar with Next.js
- npm i -- save tinacms @tinacms/cli styled-components
- create .tina folder
- create schema.ts
- define a single collection, with a title field

- create a content folder
- create an index.md file with a title value

// data layer
- update dev script (package.json) to run local graphql
- run 'npm run dev' again, make note about http://localhost:4001/altair/

- fetch title in getStaticProps from the graphql api. Explain the query


// cms
- add tina to _app.js



