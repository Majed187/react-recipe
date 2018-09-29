//// Listen on a specific host via the HOST environment variable Listen
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 1870;

const cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"]
  })
  .listen(port, host, function() {
    // eslint-disable-next-line no-console
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
