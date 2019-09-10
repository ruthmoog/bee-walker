# :construction: BeeWalker

![Build Status](https://travis-ci.org/ruthmoog/bee-walker.svg?branch=master)

BeeWalker is an app that counts bees.  It's purpose is to help Bee Walk volunteers record bumblebee abundance data and (eventually) automatically plot sightings against their transect location, which can then be recorded in the Bee Walk online portal.

https://bee-walker.herokuapp.com/

This is a side-project for [Ruth](https://github.com/ruthmoog) and [Chris](https://github.com/quii) to explore coding a PWA in React, learn some coding skillz and, assist Ruth's volunteering for the BBCT.  It is not affiliated with the BBCT, however if you're interested in learning more about surveying or bumblebees in general, check out their website https://www.bumblebeeconservation.org/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Work in Progress

BeeWalker is currently made up of components that count castes of pre-loaded bombus species.

### Progress Notes

we looked at storing the bee count data up a level. We want to display the total bee count so that it's stored centrally and then store within manually added sections so you can retrieve total count per section and total count overall.  We will need to manually reset the count when moving to a new section. The next step would be storing the count data per species per caste so that it can be recorded on the online BeeWalk form.
We wanted to learn about React Hooks so our data can be updated. https://www.youtube.com/watch?v=6RhOzQciVwI&t=605s

### To Do List

- style components
- add images of each species castes
- add the big 8/most common bombus for my transect
- save bee data to sections
- look at using a mapping API

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<!-- ### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. -->

<!-- ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it. -->

<!-- ## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

<!-- ### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size -->

<!-- ### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration -->

### CI/CD

Continuous Integration via Travis CI
Automatic deploment via Heroku here: https://bee-walker.herokuapp.com/

<!-- This section has moved here: https://facebook.github.io/create-react-app/docs/deployment -->
<!-- 
### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
