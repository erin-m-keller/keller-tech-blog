const router = require('express').Router(),
      authRoutes = require('./authRoutes'),
      commentRoutes = require('./commentRoutes');

router.use('/auth', authRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
