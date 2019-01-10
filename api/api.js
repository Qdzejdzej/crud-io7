const express     = require('express'),
      bodyParser  = require('body-parser'),
      path        = require('path'),
      cors        = require('cors'),
      mongoose    = require('mongoose');

const DB = 'mongodb://localhost:27017/crud';
const productsRoute = require('./routes');

mongoose.Promise = global.Promise;
mongoose.connect(DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', productsRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});
