const router = require('express').Router(),
      { User } = require('../models'),
      withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['userName', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
      url: req.url 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

module.exports = router;
