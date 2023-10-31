const mongoose = require("mongoose");
const { databaseConnect } = require("./database");

databaseConnect().then(async () => {
	console.log("Creating seed data");

	const Cat = mongoose.model("Cat", {
		name: String,
		colour: String,
		breed: String,
		favouritePlacesToSit: [String],
		gender: String,
		age: Number,
		safeToPet: Boolean,
		weightKg: Number,
		favouriteToys: [String],
		photos: [String],
	});

	let newLina = new Cat({
		name: "Lina",
		colour: "Black",
		breed: "meowth",
		favouritePlacesToSit: ["on the couch", "on the bed"],
		gender: "female",
		age: 2,
		safeToPet: true,
		weight: 5.5,
		favouriteToys: ["string", "mouse"],
		photos: ["http://google.com"],
	});

	await newLina.save().then(() => {
		console.log("Lina is in the database");
	});
});
