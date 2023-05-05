const express = require('express'),
      handlebars = require('express-handlebars'),
      path = require('path'),
      app = express(),
      PORT = process.env.PORT || 3001,
      hbs = handlebars.create({
        defaultLayout: 'main',
        helpers: {
          isActive: function(url) {
            return (url === this.url) ? 'active' : '';
          }
        }
      });

hbs.handlebars.registerPartial('header', '{{header}}');
hbs.handlebars.registerPartial('footer', '{{footer}}');

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});