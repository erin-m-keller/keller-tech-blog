const router = require('express').Router(),
      { Post } = require('../../models');

router.post('/add', async (req, res) => {
  console.log("req: " + req);
  try {
    const newBlog = await Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.body.user_id
    });
    const foundBlog = await Post.findByPk(newBlog.id);
    res.json({ blog: foundBlog, message: 'Post added successfully.' });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;