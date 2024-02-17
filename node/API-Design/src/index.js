import http from "http";

const server = http.createServer(async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    console.log("Request received");
    res.statusCode = 200;
    res.end("Hello World");
  }
});

server.listen(4586, () => {
  console.log("Server is running on http://localhost:4586");
});
