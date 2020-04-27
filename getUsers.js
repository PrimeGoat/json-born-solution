const fs = require('fs')


const getUsers = () => {
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }

    const users = JSON.parse(data);
    console.log(users);
  });
}


module.exports = getUsers;