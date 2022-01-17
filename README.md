# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

As this is a CRUD POC with React, in order to run this project successfully, please login to https://firebase.google.com (create the GCP account if you don't have one) and go to Console at https://console.firebase.google.com/.

1. Create a Project
2. Create a Realtime Database (select "Init on test mode")

Et voilà, you have a realtime database URL that looks like "https://<project-name>-<id>-default-rtdb.firebaseio.com/" !
This is super powerful, in summary realtime database is a no-sql database that already provides and API with all CRUD operations (POST, GET, PUT, PATCH, DELETE) on the fly!

3. Rename the ".env.example" file to ".env" and configure the REACT_APP_API_URL key to your created database URL.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
