const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/payment/process',
    createProxyMiddleware({
      target: 'http://localhost:3000/api/v1/payment/process',
      changeOrigin: true,
    }),
  );
  app.use(
    '/payment/close',
    createProxyMiddleware({
      target: 'http://localhost:3000/api/v1/payment/close',
      changeOrigin: true,
    }),
  );
};