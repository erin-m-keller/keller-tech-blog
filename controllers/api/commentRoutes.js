const router = require('express').Router(),
      { Users, Comment } = require('../../models');

router.post('/add', async (req, res) => {
  try {
    const newComment = await Comment.create({
        comment_content: req.body.comment_content,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    });
    const foundComment = await Comment.findByPk(newComment.id);
    res.json({ comment: foundComment, message: 'Comment added successfully.' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/getComments/:postId', async (req, res) => {
  try {
    const { postId } = req.params;

    const commentsData = await Comment.findAll({
      where: { post_id: postId },
      include: [{ model: Users, attributes: ['user_name'] }],
    });
    
    const comments = commentsData.map((comment) => comment.get({ plain: true }));
    
    res.json(comments);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
