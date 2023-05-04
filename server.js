// Dependencies
const express = require('express'),
      handlebars = require('express-handlebars'),
      path = require('path'),
      hbs = handlebars.create({}),
      app = express(),
      PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
