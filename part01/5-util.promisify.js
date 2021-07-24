const fs = require("fs");
const util = require("util");
let mineReadFile = util.promisify(fs.readFile);
mineReadFile("./resourse/context.txt").then((value) => {
    console.log(value.toString());
});