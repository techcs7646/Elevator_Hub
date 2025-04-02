const joi = require("joi");
const httpStatus = require("../utils/httpStatus");
const ApiError = require("../helper/apiError");
const ValidateSource = {
  BODY: "body",
  QUERY: "query",
  PARAM: "params",
  HEADER: "headers",
};
module.exports = (schema, source = ValidateSource.BODY) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req[source]);
      if (!error) return next();
      const { details } = error;
      const message = details
        .map((i) => i.message.replace(/['"]+/g, ""))
        .join(",");
      console.error(message);
      next(new ApiError(httpStatus.badRequest), message);
    } catch (e) {
      next(e);
    }
  };
};
