const fs = require('fs');


const updateUser = (parameters) => {
  const [stringI, property, value] = parameters;
  const i = Number(stringI);

  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    
    const users = JSON.parse(data);

    for (const user of users) {
      if (user.index === i) {
        user[property] = value;
      }
    }

    const updatedUsers = JSON.stringify(users, null, 2);
    console.log(updatedUsers);
    fs.writeFile('./users.json', updatedUsers, (error) => {
      if (error) {
        throw error;
      }
    })
  })

}


module.exports = updateUser;