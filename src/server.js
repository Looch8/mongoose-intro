const express = require("express");

// make a server instance
const app = express();

app.get("/", (request, response) => {
	response.json({
		message: "Hello world",
	});
});

module.exports = {
	app,
	express,
};
