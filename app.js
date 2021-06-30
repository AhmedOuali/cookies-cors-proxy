const express = require('express');
const cookieParser = require('cookie-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { notFoundController, otherRoutersController} = require('./controllers/appController')
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: true}))
app.use(cookieParser());

// this part router the rest of the app
app.use('/', createProxyMiddleware({
  target: "/",
  pathRewrite: function (path, req) {
    return `/${path.split("/").splice(4, path.split("/").length).join('/')}`;
  },

  router: function(req) {
    const url = req.originalUrl;
    const urlArray = url.split("/")
    return `${urlArray[1]}//${urlArray[3]}`;
  },
  onProxyReq: function(proxyReq, req, res) {
    console.log(`${req.method}: ${req.url}`)
  }
}));

// catch 404 and forward to error handler
app.use(notFoundController);

// error handler
// no stacktraces leaked to user unless in development environment
app.use(otherRoutersController(app));

module.exports = app;
