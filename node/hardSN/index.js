import http from "http";

const handler = (req, res) => {
  req.on("data", (chunk) => {
    console.log("data", chunk);
  });
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
};

const server = http.createServer(handler).listen(3000);
