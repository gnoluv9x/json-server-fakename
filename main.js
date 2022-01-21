const PORT = 4004;
// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
        req.body.updatedAt = Date.now();
    }
    if (req.method === "PATCH") {
        req.body.updatedAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});

server.use(middlewares);
server.use("/api", router);
server.listen(PORT, () => {
    console.log(`JSON Server is running at port : ${PORT}`);
});
