const router = require('express').Router(),
      { Users, Post, Comment } = require('../models');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['post_date', 'DESC']],
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
      url: req.url,
      postId: req.params.postId, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
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
