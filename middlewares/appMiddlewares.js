const { missingParametersError_00012 } = require('../infrastructure/errors');

exports.isQueryParamExistsMiddleWare = function(params) {
  return function(req, res, next) {
    const absentParamList = params.reduce(function(acc, curr) {
      return req.query[curr] ? acc : [...acc, curr]
    }, []);
    if (absentParamList.length > 0) return res.status(400).json(missingParametersError_00012(absentParamList.toString()));
    next()
  }
}