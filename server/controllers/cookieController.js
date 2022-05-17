const cookieController = {};

// Session cookies will persist schema state on page refresh.

cookieController.setSessionCookie = (req, res, next) => {
  try {
    const { schemaState } = req.body;
    res.cookie('schema', schemaState, 'httpOnly')
    console.log('here');
    console.log('set', schemaState);
    return next();
  } 
  catch (err) {
    const error = {
      log: 'Express error handler caught an error in the setSessionCookie middleware.',
      status: 400,
      message: { err }
    };
    return next(error)
  }
}

//test change
cookieController.getSessionCookie = (req, res, next) => {
  try {
    const { schema } = req.cookies;
    console.log('getcookie', schema);
    res.locals.schema = (schema !== undefined) ? schema : [];
    console.log('reslocal', res.locals.schema);
    return next();
  }
  catch (err) {
    const error = {
      log: 'Express error handler caught an error in the getSessionCookie middleware.',
      status: 400,
      message: { err }
    };
    return next(error)
  }
}

module.exports = cookieController;