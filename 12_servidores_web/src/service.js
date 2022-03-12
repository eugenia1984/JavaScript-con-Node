const data = require('./MOCK_DATA.json');

module.exports = {
  getUsers: () => data,
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ... dataUser,
    }

    data.push(newUser);
    
    return newUser;
  }
}