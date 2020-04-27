const handleGet = require('./handleGet.js');
const handlePost = require('./handlePost.js');
const handlePut = require('./handlePut.js');
const handleDelete = require('./handleDelete.js');


const parameters = process.argv.slice(2);
const action = parameters[0];
const route = parameters[1];
// snappy version:
// const [action, route] = parameters;
const extraParameters = parameters.slice(2);

// if we had `GET user 3`
// We'd have
// action -> 'GET'
// route -> 'users'
// extraParameters -> ['3']

// if we had `POST user 3 blue`
// We'd have
// action -> 'POST'
// route -> 'user'
// extraParameters -> ['3', 'blue']

switch(action) {
  case 'GET':
    handleGet(route, extraParameters);
    break;

  case 'POST':
    handlePost(route, extraParameters);
    break;

  case 'PUT':
    handlePut(route, extraParameters);
    break;

  case 'DELETE':
    handleDelete(route, extraParameters[0]);
    break;
}
