const { verifyToken } = require("../utils/jwtUtil");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("No token provided");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Malformed token");
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
};

module.exports = authMiddleware;
