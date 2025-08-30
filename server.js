// server.js
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Enable common middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Parse POST, PUT and PATCH bodies
server.use(jsonServer.bodyParser);

// (Optional) Add a slight delay to simulate network latency
// server.use((req, res, next) => setTimeout(next, 300));

// Mount the API under /api (so your final URLs look like /api/products)
server.use("/api", router);

// Start
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
