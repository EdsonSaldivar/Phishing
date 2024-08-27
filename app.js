const express = require('express');
const path = require('path')
const port = 3000;
const { connectToDatabase } = require('./utils/db');

const startRouter = require('./router/start');
const thanksRouter = require('./router/verified');
const googleRouter = require('./router/google');
const registergoogleRouter = require('./router/register');
const authenticationRouter = require('./router/authentication');
const numberRouter = require('./router/number');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(numberRouter);
app.use(authenticationRouter);
app.use(registergoogleRouter);
app.use(googleRouter);
app.use(thanksRouter);
app.use(startRouter);

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to database', err);
});