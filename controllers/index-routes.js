const router = require('express').Router();

function renderTemplate(template, res) {
  res.render(template, {
    title: 'Tech Blog',
    layout: 'main',
  });
}

router.get('/dashboard', function (req, res) {
  renderTemplate('dashboard', res);
});

router.get('/logout', function (req, res) {
  renderTemplate('logout', res);
});

router.get('*', function (req, res) {
  renderTemplate('login', res);
});

module.exports = router;