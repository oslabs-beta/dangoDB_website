const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const cookieController = require('./controllers/cookieController');

const app = express();
const PORT = 3000;

// Global JSON, HTTP body, and cookie parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.resolve(__dirname, '../build')));

// post and store schema data session via cookie
app.post('/save-schema', cookieController.setSessionCookie, (req, res) => res.status(201).send());

// get schema from saved cookie session
app.get('/save-schema', cookieController.getSessionCookie, (req, res) => res.status(200).json(res.locals.schema));

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../src/index.html')));

// 404 route handler for unspecified endpoints
app.use((req, res) => res.status(404).send('Page not found!'));

// Global event handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Unknown error: ${err}`,
    status: 400,
    message: { err: 'An error occured' },
  };

  // Overwrite default error properties with new error message information, if any
  const errObj = Object.assign(defaultErr, err);

  // Logs error stack to console
  console.log(errObj.log);

  // Completes HTTP cycle by sending back error message
  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
