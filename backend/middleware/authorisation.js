const jwt = require('jsonwebtoken');

const authorization = (string) => {
    return (req, res, next) => {
      if (!req.token.role.permissions.includes(string)) {
        return res.status(403).json({
          success: false,
          message: `Unauthorized`,
        });
      }
      next();
    };
  };
  
  module.exports = authorization;
  