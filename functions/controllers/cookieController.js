const cookieController = {};

// Session cookies will persist schema state on page refresh.
cookieController.setSessionCookie = (req, res, next) => {
  try {
    const { schema } = req.body;
    if (req.cookies.__session) res.clearCookie('__session');
    res.cookie('__session', schema);
    return next();
  } catch (err) {
    const error = {
      log: 'Express error handler caught an error in the setSessionCookie middleware.',
      status: 400,
      message: { err },
    };
    return next(error);
  }
};

cookieController.getSessionCookie = (req, res, next) => {
  try {
    const schema = req.cookies.__session;
    res.locals.schema = schema !== undefined ? schema : [];
    return next();
  } catch (err) {
    const error = {
      log: 'Express error handler caught an error in the getSessionCookie middleware.',
      status: 400,
      message: { err },
    };
    return next(error);
  }
};

module.exports = cookieController;