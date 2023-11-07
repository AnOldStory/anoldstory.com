// "use strict";

// module.exports = backend;

// function backend() {
//   return "Hello from backend";
// }

var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var message = "It works!\n",
    version = "NodeJS " + process.versions.node + "\n",
    response = [message, version].join("\n");
  res.end(response);
});
server.listen();
