exports.notFoundController = function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}

exports.otherRoutersController = function (app) {
  return function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: (app.get('env') === 'development') ? err : {},
    });
  }
}