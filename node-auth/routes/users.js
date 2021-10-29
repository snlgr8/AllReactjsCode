const router = require('express').Router();
const {
  userRegister,
  userLogin,
  userAuth,
  serializeUser,
  checkRoles,
} = require('../utils/Auth');

//User registration
router.post('/register-user', async (req, res) => {
  await userRegister(req.body, 'user', res);
});

//Admin registration
router.post('/register-admin', async (req, res) => {});
//Superadmin registration
router.post('/register-superadmin', async (req, res) => {});
//User login
router.post('/login-user', async (req, res) => {
  await userLogin(req.body, 'user', res);
});
//Admin login
router.post('/login-admin', async (req, res) => {});
//Superadmin login
router.post('/login-superadmin', async (req, res) => {});
//Userprofile

router.get('/user-profile', userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

router.post(
  '/admin-protected',
  userAuth,
  checkRoles['admin'],
  async (req, res) => {}
);

module.exports = router;
