const router = require('express').Router(),
      semanticJs = '/css/semantic/dist/semantic.min.js',
      mainJs = '/js/main.js',
      semanticCss = '/css/semantic/dist/semantic.min.css',
      mainCss = '/css/index.css';

function renderTemplate(template, res, data) {
  const mergedData = {
    title: 'Tech Blog',
    layout: 'main',
    semanticJs: semanticJs,
    mainJs: mainJs,
    semanticCss: semanticCss,
    mainCss: mainCss,
    ...data 
  };
  res.render(template, mergedData);
}

router.get('/dashboard', function (req, res) {
  renderTemplate('dashboard', res, { url: req.url });
});

router.get('/logout', function (req, res) {
  renderTemplate('logout', res, { url: req.url });
});

router.get('*', function (req, res) {
  renderTemplate('login', res, { url: req.url });
});

module.exports = router;