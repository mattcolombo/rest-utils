// server.js

/**
 * Required external modules
 */
// loads the express package
var express = require('express');
// https module to secure communication
var http = require('http');
// add timestamps in front of log messages
require('console-stamp')(console, 'yyyy/mm/dd--HH:MM:ss.l');

/**
 * App variables
 */
// create an app object with the express package loaded above, and assign a port 
const app = express();
// default port is 1010, used unless there is a system property set for it (process object references system properties)
const port = process.env.PORT || 1010;

// requesting the express app to use JOSON parsing of body
app.use(express.json());

// allowing origin for requests from anywhere
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// brings in the routes object, and sets those routes for the app
const routes = require('./api/routes');
routes(app);

/**
 * Creates the Swagger documentation for the API
 */
// setting up the Swagger/OpenAPI documentation at `/developer/documentation` endpoint
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const documentation = YAML.load('./restDoc.yml');
app.use('/developer/documentation', swaggerUi.serve, swaggerUi.setup(documentation));

/**
 * Server startup
 */
// start the server over HTTP
//
const server = http.createServer(app).listen(port, function () {
    console.log('Server started on port: ' + port);
});

// adding provisions for graceful shutdown of the server --> this takes care of Ctrl+C (in the terminal)
process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing HTTPS server.');
    server.close(() => {
        console.log('HTTP server closed.');
    });
});
// adding provisions for graceful shutdown of the server --> this takes care of SIGINT (kill <PID>)
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing HTTPS server.');
    server.close(() => {
        console.log('HTTPS server closed.');
    });
});