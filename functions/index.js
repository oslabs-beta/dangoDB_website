const functions = require('firebase-functions');
const firebase = require('firebase-admin');

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
// app.use('/build',
//   express.static(path.resolve(__dirname, '../build'))
// );

exports.fireapp = functions.https.onRequest(app);
app.post('/save-schema', cookieController.setSessionCookie, (req, res) => {
  return res.status(201).send();
});

app.get('/save-schema', cookieController.getSessionCookie, (req, res) => {
  return res.status(200).json(res.locals.schema);
});

// React Router handles client-side navigation of the below endpoints.
// Each endpoint responds with the template index.html file for scenario of page refersh on one of those endpoints.
// app.get('/docs',
//   (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
//   }
// );
// app.get('/demo',
//   (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
//   }
// );
// app.get('/schema',
//   (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
//   }
// );
// app.get('/',
//   (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
//   }
// );

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

// const app = require('../server/server');
exports.fireapp = functions.https.onRequest(app);
// exports.fireapp = functions.https.onRequest((req, res) => {
//   res.json(req.method)
// });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.fireapp = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
