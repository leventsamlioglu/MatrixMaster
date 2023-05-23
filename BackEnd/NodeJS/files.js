const fs = require("fs");

// reading files

fs.readFile("BackEnd/NodeJS/docs/read.txt", (err, data) => {
	if (err) console.log(err);
	console.log("Async", data.toString());
});

let sync = fs.readFileSync("BackEnd/NodeJS/docs/read.txt", "utf8");

console.log("Sync", sync);

// https://shan-tech.hashnode.dev/readfile-vs-readfilesync

// --------------------------------------------------------------------------
// writing files

let readFile = fs.readFileSync("BackEnd/NodeJS/docs/write.txt", "utf8");

readFile
	? (readFile = `${readFile}\n 'Hello world'`)
	: (readFile = "Hello world!");

fs.writeFile("BackEnd/NodeJS/docs/write.txt", readFile, () => {
	console.log("file was written!");
});

// --------------------------------------------------------------------------
// directories

if (!fs.existsSync("BackEnd/NodeJS/assets")) {
	fs.mkdir("BackEnd/NodeJS/assets", (err) => {
		if (err) console.log(err);
		console.log("folder created");
	});
} else {
	fs.rmdir("BackEnd/NodeJS/assets", (err) => {
		if (err) console.log(err);
		console.log("folder deleted");
	});
}

// --------------------------------------------------------------------------
// deleting files

if (!fs.existsSync("BackEnd/NodeJS/docs/new.txt")) {
	fs.appendFile("BackEnd/NodeJS/docs/new.txt", "", (err) => {
		if (err) console.log(err);
		console.log("File is created successfully.");
	});
} else {
	fs.unlink("BackEnd/NodeJS/docs/new.txt", (err) => {
		if (err) console.log(err);
		console.log("File is deleted successfully.");
	});
}
