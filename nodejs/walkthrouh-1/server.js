const http = require("http");

// Ran everytime server gets called
// Req === request , res === response
// Req is and object representing everyting coming from request
// Res is everytgin that you're going to send back to user
const server = http.createServer(function(req, res) {
    console.log(`user visited ${req.url}`);
    res.end("hello");
});

console.log("listening on http://localhost:3000");
server.listen(3000);