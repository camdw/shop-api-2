'use strict';

const mongoose = require('mongoose');
const dbName = 'dynamicshop';

// connect to the database
mongoose.connect(`mongodb://localhost:27017/${dbName}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {  
  console.log(`Connected to the ${dbName} database`);
});