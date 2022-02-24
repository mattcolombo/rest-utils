// routes.js

// used to enforce secure coding practices; forces execution in strict mode
// strict mode --> prevents use of undeclared variables and other things
'use strict';

// loads the controllers
var controller = require('./controller');

// declares functions available to other files
module.exports = function (app) {
    // creates endpoints for various requests; actions are taken from the main controller
    app.route('/about').get(controller.about);
};