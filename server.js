const express = require('express'),
      handlebars = require('express-handlebars'),
      path = require('path'),
      app = express(),
      PORT = process.env.PORT || 3001,
      routes = require('./controllers'),
      helpers = require('./utils/helpers'),
      sequelize = require('./config/connection'),
      session = require('express-session'),
      SequelizeStore = require('connect-session-sequelize')(session.Store),
      hbs = handlebars.create({
        defaultLayout: 'main',
        helpers
      });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

hbs.handlebars.registerPartial('header', '{{header}}');
hbs.handlebars.registerPartial('footer', '{{footer}}');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});