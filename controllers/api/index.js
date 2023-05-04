const router = require('express').Router(),
      postRoutes = require('./post-routes'),
      commentRoutes = require('./comment-routes'),
      authorRoutes = require('./author-routes');

router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/author', authorRoutes);

module.exports = router;