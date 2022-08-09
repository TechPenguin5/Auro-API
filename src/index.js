const express = require("express");
const http = require("http");
const https = require("https");
const cors = require("cors");

// //DDNS Local Discovery todo
// var bonjour = require('bonjour')()
// // advertise an HTTP server on port 3000
// bonjour.publish({ name: 'Auro-API', type: 'auro', port: 3000 })
// // browse for all http services
// bonjour.find({ type: 'auro' }, function (service) {
//   console.log('Found an Auro server:', service)
// })

//build config
const config = require("./config");
const {
  https: { key, cert },
  port,
  isHttps,
  serviceName,
} = config;
const credentials = { key, cert };

//setup app
const app = express();
app.use(cors());

//setup routes
const routes = require("./routes/index.route");
app.use(routes);

//start http server
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);

//start https server
if (isHttps) {
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(port + 1);
  console.log(`[${serviceName}] https server listening at port ${port + 1}`);
}

module.exports = { app };
