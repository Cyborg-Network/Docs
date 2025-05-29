const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Docs',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/Docs': '',
      },
    })
  );
};