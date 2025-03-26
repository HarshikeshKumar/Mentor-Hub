module.exports = (execution) => (req, res, next) => {
  execution(req, res, next).catch(next);
};
