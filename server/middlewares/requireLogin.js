module.exports = (req, res, next) => {
  if (!req.user) {
    res.json({ error: "Unauthorized", code: 401, message: "Login to access" }).status(401);
  } else {
    next();
  }
};
