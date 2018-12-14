var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true};
} else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest', {useNewUrlParser: true};
} else {
  process.env.MONGODB_URI = 'mongodb://nicodev:nicodev123@ds131531.mlab.com:31531/todo-app', {useNewUrlParser: true}
}
