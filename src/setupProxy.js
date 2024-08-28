// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};