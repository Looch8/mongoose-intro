// This file handles boot-up of server

const { app } = require("./server.js");

app.listen(3000, () => {
	console.log("Server running!");
});
