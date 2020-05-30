const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  if (!process.env.NODE_ENV === "production")
    app.use(
      ["/api", "/auth"],
      createProxyMiddleware({
        target: "http://localhost:5000",
      })
    );
};
