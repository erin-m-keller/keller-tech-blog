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
      hbs = exphbs.create({ helpers }),
      sess = {
        secret: process.env.SECRET,
        cookie: {
          maxAge: 1800000, // Session expiration time in milliseconds (30 minutes)
        },
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