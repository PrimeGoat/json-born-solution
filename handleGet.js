const getUsers = require('./getUsers.js')
const getUser = require('./getUser.js')
const getFriends = require('./getFriends.js')


const handleGet = (route, parameters) => {
  const i = Number(parameters[0])

  switch (route) {
    case 'users':
      getUsers();
      break;
    
    case 'user':
      getUser(i);
      break;

    case 'friends':
      getFriends(i);
  }
}


module.exports = handleGet;
