const fs = require('fs')


const getFriends = (i) => {
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    const users = JSON.parse(data);
    const user = users.find((user) => user.index === i);
    console.log(user.friends);
  });
}


module.exports = getFriends;