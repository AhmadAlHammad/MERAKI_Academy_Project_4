const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  console.log("Authentication middleware triggered");
try{
  if (!req.headers.authorization) {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

    const authHeader = req.headers.authorization;
  const token = authHeader.split(" ").pop(); 
console.log("auth",token);

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
    }else{
      req.token = decoded; 
      next();
    }
    
   
  })}
  catch(err){
res.status(500).json({
  err
})
  }
};

module.exports = authentication;
