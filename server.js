const path = require('path'),
      express = require('express'),
      session = require('express-session'),
      exphbs = require('express-handlebars'),
      routes = require('./controllers'),
      helpers = require('./utils/helpers'),
      sequelize = require('./config/connection'),
      SequelizeStore = require('connect-session-sequelize')(session.Store),
      app = express(),
      PORT = process.env.PORT || 3001,
      hbs = exphbs.create({ helpers: {
        isActive: function(url) {
          return (url === this.url) ? 'active' : '';
        }
      } }),
      sess = {
        secret: 'Super secret secret',
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
          db: sequelize
        })
      };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});