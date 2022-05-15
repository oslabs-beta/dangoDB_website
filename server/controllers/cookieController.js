const cookieController = {};

// Session cookies will persist schema state on page refresh.

cookieController.setSessionCookie = (req, res, next) => {
  const { schemaState } = req.body;
  res.cookie('schema', schemaState, 'secure')
  return next();
}

module.exports = cookieController;