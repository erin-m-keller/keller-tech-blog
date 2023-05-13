const router = require('express').Router(),
      { Users, Post, Comment } = require('../models'),
      withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }
  res.render('login');
});

router.get('/home', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['post_date', 'ASC']],
      include: [
        {
          model: Users,
          attributes: ['user_name', 'email'],
        },
        {
          model: Comment,
          include: [
            {
              model: Users,
              attributes: ['user_name', 'email'],
            },
          ],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
      logged_in_id: req.session.logged_in_id,
      url: req.url
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await Users.findAll({
      attributes: { exclude: ['password'] },
      order: [['user_name', 'ASC']],
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

module.exports = router;
