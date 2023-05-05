const router = require('express').Router(),
      semanticJs = '/semantic/dist/semantic.min.js',
      semanticCss = '/semantic/dist/semantic.min.css',
      mainCss = '/index.css';

function renderTemplate(template, res) {
  res.render(template, {
    title: 'Tech Blog',
    layout: 'main',
    semanticJs: semanticJs,
    semanticCss: semanticCss,
    mainCss: mainCss
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