const fs = require('fs');


const deleteUser = (stringI) => {
  const i = Number(stringI);

  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }

    const users = JSON.parse(data);
    const updatedUsers = users.filter((user) => user.index !== i);
    const json = JSON.stringify(updatedUsers, null, 2)
    
    fs.writeFile('./users.json', json, (error) => {
      if (error) {
        throw error;
      }
    })
  })
}


module.exports = deleteUser;