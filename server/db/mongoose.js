var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://nicodev:nicodev123@ds131531.mlab.com:31531/todo-app' || 'mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
});

// MongoDB connection only for localhost

// mongoose.connect('mongodb://localhost:27017/TodoApp', {
//   useNewUrlParser: true
// });

module.exports = {mongoose};
