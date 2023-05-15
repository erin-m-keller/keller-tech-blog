const router = require('express').Router(),
      { Users } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newUser = await Users.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    }),
    userData = await Users.findOne({ where: { email: newUser.email } });
    req.session.save(() => {
      req.session.logged_in_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'Successful login.' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(400).json({ error: 'Email is not registered. Please sign up.' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ error: 'Incorrect password.' });
      return;
    }
    req.session.save(() => {
      req.session.logged_in_id = userData.id;
      req.session.logged_in = true;
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
