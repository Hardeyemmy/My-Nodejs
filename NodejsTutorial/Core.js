const path = require("path");
const util = require("util");

const dirUpload = path.join(__dirname, "www", "files","uploads");

util.log(path.basename(__filename));


console.log(dirUpload);
util.log("^ This is the current file");