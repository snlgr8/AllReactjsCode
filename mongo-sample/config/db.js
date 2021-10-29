const { connect } = require('mongoose');

const { DB } = require('./index');

const connectDb = async () => {
  await connect(DB, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDb;
