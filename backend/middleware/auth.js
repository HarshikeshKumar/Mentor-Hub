const jwt = require("jsonwebtoken");
const { getUserById } = require("../services/user.service");
const ApiError = require("../helper/apiError");
const httpStatus = require("../util/httpStatus");
const { verifyToken } = require("../services/token.service");

const protect = async (req, res, next) => {
  // 1) Get token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new ApiError(
        httpStatus.unauthorized,
        "You are not logged in! Please log in to get access."
      )
    );
  }

  try {
    // 2) Verify token
    const decoded = await verifyToken(token, "accessToken");

    // 3) Check if user still exists
    const currentUser = await getUserById(decoded._id);
    if (!currentUser) {
      return next(
        new ApiError(
          httpStatus.unauthorized,
          "The user belonging to this token no longer exists."
        )
      );
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  } catch (error) {
    return next(
      new ApiError(
        httpStatus.unauthorized,
        "Invalid token. Please log in again."
      )
    );
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          httpStatus.forbidden,
          "You do not have permission to perform this action"
        )
      );
    }
    next();
  };
};

module.exports = {
  protect,
  restrictTo,
};
