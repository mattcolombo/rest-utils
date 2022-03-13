// routes.js

// used to enforce secure coding practices; forces execution in strict mode
// strict mode --> prevents use of undeclared variables and other things
'use strict';

// loads the controllers
var controller = require('./controller');

// declares functions available to other files
module.exports = function (app) {
    // creates endpoints for various requests; actions are taken from the main controller
    // about route: returns the information on the API itself
    app.route('/about').get(controller.about);
    // return a sample json object in the response body so that it can be examined in the client under development
    app.route('/sample/get/json').get(controller.returnJsonSample);
    // return a success code and no body
    app.route('/sample/get/code/success').get(controller.returnSuccess);
    // return an error code and no body
    app.route('/sample/get/code/error').get(controller.returnError);
    // return te data that was posted 
    app.route('/sample/post/json').post(controller.returnPost);
    // return an error code and no body
    app.route('/sample/put/json').put(controller.returnPut);
};