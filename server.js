const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
};
//helloooooo
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
});