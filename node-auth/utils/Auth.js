const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');
const passport = require('passport');
/**
 * @DESC to register the user
 **/
const userRegister = async (userDets, role, res) => {
  try {
    // Validate the username
    let usernameNotTaken = await validateUsername(userDets.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false,
      });
    }

    // validate the email
    let emailNotRegistered = await validateEmail(userDets.email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
        success: false,
      });
    }

    // Get the hashed password

    const password = await bcrypt.hash(userDets.password, 12);

    // create a new user
    const newUser = new User({
      ...userDets,
      password,
      role,
    });

    await newUser.save();
    return res.status(201).json({
      message: 'Hurry! now you are successfully registred. Please nor login.',
      success: true,
    });
  } catch (err) {
    // Implement logger function (winston)
    console.log(err);
    return res.status(500).json({
      message: 'Unable to create your account.',
      success: false,
    });
  }
};

const validateUsername = async (username) => {
  let user = await User.findOne({ username });
  return user ? false : true;
};
const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const userLogin = async (userCreds, role, res) => {
  let { username, password } = userCreds;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      message: 'Username is not found. Invalid credentials',
      success: false,
    });
  }

  if (user.role !== role) {
    return res.status(404).json({
      message: 'You dont have permission to login this portal',
      success: false,
    });
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(404)
      .json({ message: 'Password is incorrect', success: false });
  } else {
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email,
      },
      SECRET,
      { expiresIn: '7 days' }
    );

    let result = {
      username: user.username,
      email: user.email,
      role: user.role,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };

    return res
      .status(200)
      .json({ ...result, message: 'You are now signed in', success: true });
  }
};

const checkRoles = (roles) => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json({ message: 'Unauthorized', success: false })
    : next();

const userAuth = passport.authenticate('jwt', { session: false });

const serializeUser = (user) => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt,
  };
};
module.exports = {
  userRegister,
  userLogin,
  checkRoles,
  serializeUser,
  userAuth,
};
