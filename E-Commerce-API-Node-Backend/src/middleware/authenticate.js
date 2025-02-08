const jwtProvider = require("../config/jwtProvider.js");
const userServices = require("../services/user.service.js");
const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Authorization header missing" });
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token not found" });
    }

    const userId = await jwtProvider.getUserIdFromToken(token);
    const user = await userServices.findUserById(userId);
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = authenticate ;
