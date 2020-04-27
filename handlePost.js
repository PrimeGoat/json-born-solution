const postUser = require('./postUser.js')
const postFriend = require('./postFriend.js')


const handlePost = (route, parameters) => {
  switch(route) {
    case 'user':
      postUser(parameters);
      break;

    case 'friend':
      postFriend(parameters);
      break;
  }
}


module.exports = handlePost;