const handleGet = require('./handleGet.js');
const handlePost = require('./handlePost.js');
const handlePut = require('./handlePut.js');
const handleDelete = require('./handleDelete.js');


const parameters = process.argv.slice(2);
const [action, route] = parameters;
const extraParameters = parameters.slice(2);

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
