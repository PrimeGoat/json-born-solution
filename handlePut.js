const updateUser = require('./updateUser.js');


const handlePut = (route, parameters) => {
  switch(route) {
    case 'user':
      updateUser(parameters);
      break;
  }
}


module.exports = handlePut;