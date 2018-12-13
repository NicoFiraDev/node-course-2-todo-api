const {ObjectID}  = require('mongodb'),
      {mongoose}  = require('../server/db/mongoose'),
      {Todo}      = require('../server/models/todo'),
      {User}      = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c12724ef636a358af452d00').then((todo) => {
  console.log(todo);
});
