const jwt        = require('jsonwebtoken'),
      {ObjectID} = require('mongodb'),
      {Todo}     = require('../../models/todo'),
      {User}     = require('../../models/user');

const userOneId = new ObjectID(),
      userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'nicolas@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'ellie@example.com',
  password: 'userTwoPass'
}];

const todos = [{
  _id: new ObjectID,
  text: 'First test todo'
}, {
  _id: new ObjectID,
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    var userOne = new User(users[0]).save(),
        userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
