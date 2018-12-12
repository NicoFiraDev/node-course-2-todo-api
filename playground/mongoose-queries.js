const {ObjectID}  = require('mongodb'),
      {mongoose}  = require('../server/db/mongoose'),
      {Todo}      = require('../server/models/todo'),
      {User}      = require('../server/models/user');

// var id = '5c11292e2c889f06d1868ebf11';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var userID = '5c110b6712dbeffa94b2945c';

User.findById(userID).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User by ID', user);
}, (e) => {
  console.log(e);
});
