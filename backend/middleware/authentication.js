const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  console.log("Authentication middleware triggered");

  if (!req.headers.authorization) {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

    const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1]; 

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {

    if (err) {
      console.error("Token verification error:", err);
      return res.status(403).json({
        success: false,
        message: "The token is invalid or expired",
      });
    }
    
    req.user = decoded; 
    next();
  });
};

module.exports = authentication;
