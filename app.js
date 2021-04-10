// Import Express and set up the app
const express = require('express');
const app = express();

//importing router 
const routes = require('./routes');

//import errorhandlers
const errorHandlers = require('./errorHandlers');
//passing in routes
app.use(routes);

//passing errorhandlers
app.use(errorHandlers.fourOhfourError);
app.use(errorHandlers.globalError);

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})