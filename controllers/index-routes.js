const router = require('express').Router(),
      path = require('path'),
      handlebars  = require('express-handlebars');

router.engine('handlebars', handlebars());
router.set('view engine', 'handlebars');

function renderTemplate(template, res) {
  res.render(template, {
    title: 'Tech Blog',
    layout: 'layout',
  });
}

router.get('/dashboard', function (req, res) {
  renderTemplate('dashboard', res);
});

router.get('/login', function (req, res) {
  renderTemplate('login', res);
});

router.get('/logout', function (req, res) {
  renderTemplate('logout', res);
});

router.get('*', function (req, res) {
  renderTemplate('index', res);
});

module.exports = router;