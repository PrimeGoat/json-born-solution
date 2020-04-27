const fs = require('fs');


const postUser = (parameters) => {
  const [name, age, eyeColor] = parameters;
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    
    const users = JSON.parse(data);
    const newUser = {
      name,
      age,
      eyeColor,
      index: users.length,
    }
    users.push(newUser);
    const updatedUsers = JSON.stringify(users, null, 2);
    fs.writeFile('./users.json', updatedUsers, (error) => {
      if (error) {
        throw error;
      }
    });
  })
}


module.exports = postUser;