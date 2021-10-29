const cors = require('cors');
const express = require('express');
const { connect } = require('mongoose');
const { success, error } = require('consola');
const passport = require('passport');

//App Constants
const { DB, PORT } = require('./config');
const app = express();

//Middleware
app.use(cors());
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(passport.initialize());
require('./middleware/passport')(passport);
//Use routes
app.use('/api/users', require('./routes/users'));
const startApp = async () => {
  try {
    // Connection With DB
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    success({
      message: `Successfully connected with the Database \n${DB}`,
      badge: true,
    });

    // Start Listenting for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
    startApp();
  }
};

startApp();
