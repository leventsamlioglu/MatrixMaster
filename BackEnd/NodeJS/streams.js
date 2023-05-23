const fs = require("fs");

const readStream = fs.createReadStream("BackEnd/NodeJS/docs/streamRead.txt", {
	encoding: "utf8",
});
const writeStream = fs.createWriteStream("BackEnd/NodeJS/docs/streamWrite.txt");

readStream.on("data", (chunk) => {
	writeStream.write("\nNEW CHUNK:\n");
	writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);

// https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-streams-in-node-js#