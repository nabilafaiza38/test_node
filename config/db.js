const mongoose = require('mongoose');

const DB_Path = process.env.DB_Path;
mongoose.set('useFindAndModify', false);
mongoose.connect(DB_Path, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("YES")).catch(err => console.log(err))

var db = mongoose.connection

module.exports = db