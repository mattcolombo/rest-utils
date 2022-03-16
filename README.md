# rest-utils

A sample RESTful endpoint that can be used for testingwhe building clients. Allows different operations, and exposes endpoints with different return types (errors, success, with or without a body). This will allow to test various capability of the client under development.

## Basic usage

When using for the first time, run `npm install` to download all the dependencies. Once done, run the API simply by using `npm start`. The API will then be exposed on _localhost_ on port _1010_.

## Documentation

To find all the options offered by the API, please navigate in a browser to the _/developer/documentation_ path. This will expose an interactive documentation page with all the information on the possibilities offered by the API.

## Running the API in docker

A `Dockerfile` is provided when one may want to run the API in doker rather than simply on the local system. In order to use this, first an image needs to be built; to do so use 

```
docker build . -t <repository>/rest-utils:<version>
```
Once the docker image is available, it can be run using the following command

```
docker run --rm -d -p 1010:1010 <repository>/rest-utils:<version>
```

NOTE: if one desires to connect to the API using a port different thatn 1010, it would be sufficient to expose a different one using `-p <desired_port>:1010` which will then bind the desired port to the one exposed by the API itself running inside of docker.
