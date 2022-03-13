// used to enforce secure coding practices; forces execution in strict mode
// strict mode --> prevents use of undeclared variables and other things
'use strict';

// loads the package.json file to allow access to the information about the API
const properties = require('../package.json');
const sampleResponse = require('../api/data/sampleResponse.json')

// define the behaviour for the simple test routes (including the /about route that returns information about the API itself)
var controllers = {
    // about accepts request and response; we only use response
    about: function (request, response) {
        var aboutInfo = {
            // properties refers to the package.json
            name: properties.name,
            version: properties.version,
            author: properties.author,
            license: properties.license,
            description: properties.description
        }
        console.log("Sending about information");
        // we set the about properties and return them as json in the response
        response.json(aboutInfo);
    },
    returnJsonSample: function (request, response) {
        console.log("Sending a sample JSON body");
        response.json(sampleResponse);
    },
    returnSuccess: function (request, response) {
        console.log("Sending back a success code");
        response.sendStatus(200);
    },
    returnError: function (request, response) {
        console.log("Sending back an error code");
        response.sendStatus(500);
    },
    returnPost: function (request, response) {
        console.log("Sending back the submitted JSON body (POST)");
        response.json(request.body);
    },
    returnPut: function (request, response) {
        console.log("Sending back the submitted JSON body (PUT)");
        response.json(request.body);
    }
};

// make controllers available to the other files
module.exports = controllers;