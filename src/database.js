const mongoose = require("mongoose");

// This function connects to the database
async function databaseConnect() {
	try {
		// DB connection can take some time, eg. if DB is in the cloud
		await mongoose.connect(
			"mongodb+srv://catAdmin:<catAdmin1>@cloudcatdb.mequxlz.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("Database connected");
	} catch (error) {
		console.warn(
			`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`
		);
	}
}

module.exports = {
	databaseConnect,
};
