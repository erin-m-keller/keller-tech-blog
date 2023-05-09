const router = require('express').Router(),
      apiRoutes = require('./api'),
      appRoutes = require('./appRoutes');

router.use('/', appRoutes);
router.use('/api', apiRoutes);

module.exports = router;
