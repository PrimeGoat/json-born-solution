const deleteUser = require('./deleteUser.js');


const handleDelete = (route, i) => {
  switch(route) {
    case 'user':
      deleteUser(i);
  }
}


module.exports = handleDelete;