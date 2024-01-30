# Portfolio Website

Hello, this is a profile website that I've made to advertise my services as a front end developer and possibly a scrum master.

## Architecture Decision

It's a simple one page application which I have split into a component library and application. The component library can be viewed and worked on independently using storybook so as to allow things to look correct before integrating them with the wider application.

I make extensive use of [Chakra UI](https://chakra-ui.com/) to get base components implemented as I like the use of a styled system that it implements.

I have used Chakra's [useMediaQuery](https://chakra-ui.com/docs/hooks/use-media-query) to check for screen resolution in order to provide a resposive mobile design.

I have used [Redux](https://redux.js.org/) for managing the global state which currently is only the theme changer. This allows components to check the theme as they need rather than ensuring a chain of props is correctly passed down to many children.

Lastly, I am using Vite as the build engine as it's faster than webpack.

## Install

1. Clone this repo locally
2. Run `npm i`

## Commands available

`npm run dev` - Run a local development instance of the application folder where `main.tsx` is the root. Will be available by default on `http://localhost:5173/portfolio/`. To change from portfolio, change the base in vite.config.ts: `base: '/portfolio/'`. This was done to enable it's use in github pages.  
`npm run storybook` - Run a local development instance of the component library which will be availible by default on `http://localhost:6006/`.  
`npm run build` - Will build production code and place it in the dist folder.  
`npm run codestyle:fix` - Run lint and prettier fix.  
`npm run codestyle:check` - Run lint and prettier check.  
`npm test` - Run Jest test with coverage.  
`npm test:all` - Run Jest test with coverage on all files.
