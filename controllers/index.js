const router = require('express').Router(),
      apiRouter = require('./api'),
      indexRouter = require('./index-routes');

router.use('/api', apiRouter);
router.use('/', indexRouter);

module.exports = router;