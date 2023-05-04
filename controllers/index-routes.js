const router = require('express').Router(),
      path = require('path');

function sendFile(filePath, res) {
  res.sendFile(path.join(__dirname, filePath));
}

router.get('/dashboard', function (req, res) {
  sendFile('../public/dashboard.html', res);
});

router.get('/login', function (req, res) {
  sendFile('../public/login.html', res);
});

router.get('/logout', function (req, res) {
  sendFile('../public/logout.html', res);
});

router.get('*', function (req, res) {
  sendFile('../public/index.html', res);
});

module.exports = router;