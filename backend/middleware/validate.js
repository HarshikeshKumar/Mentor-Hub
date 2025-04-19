const Joi = require("joi");

const httpStatus = require("../util/httpStatus");
const ApiError = require("../helper/apiError");

const ValidationSource = {
  BODY: "body",
  HEADER: "headers",
  QUERY: "query",
  PARAM: "params",
};

module.exports = (schema, source = ValidationSource.BODY) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req[source]);

      if (!error) return next();

      const { details } = error;
      const message = details
        .map((i) => i.message.replace(/['"]+/g, ""))
        .join(",");
      console.error(message);

      next(new ApiError(httpStatus.badRequest, message));
    } catch (error) {
      next(error);
    }
  };
};
