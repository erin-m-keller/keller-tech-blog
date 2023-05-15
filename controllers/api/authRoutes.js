// initialize variables
const router = require('express').Router(),
      { Users } = require('../../models');

/**
 * @createUser
 * creates a new user on sign up
 */
router.post('/create', async (req, res) => {
  try {
    // create a new user
    const newUser = await Users.create({
      user_name: req.body.user_name, // user name
      email: req.body.email, // email
      password: req.body.password // password
    }),
    // get the updated user data
    userData = await Users.findOne({ where: { email: newUser.email } });
    req.session.save(() => { // save the session details
      req.session.logged_in_id = userData.id; // logged in id
      req.session.logged_in = true; // logged in true
      res.json({ user: userData, message: 'Successful login.' }); // return user data and success message
    });
  } catch (err) {
    // return status 400 and error message
    res.status(400).json(err);
  }
});

/**
 * @login
 * authenticates the user
 */
router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { user_name: req.body.username } });
    if (!userData) {
      res.status(400).json({ error: 'Username is not registered. Please sign up.' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ error: 'Incorrect password.' });
      return;
    }
    req.session.logged_in_id = userData.id;
    req.session.logged_in = true;
    req.session.save((err) => {
      if (err) {
        res.status(400).json({ error: 'An error occurred while saving the session.' });
        return;
      }
      res.json({ user: userData, message: 'You are now logged in.' });
    });
  } catch (err) {
    res.status(400).json({ error: 'An error occurred while processing your request.', msg: err });
  }
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
