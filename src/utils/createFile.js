const fs = require("fs");

function createFile(name, extention, data) {
    fs.writeFileSync(`${name}.${extention}`, JSON.stringify(data, null, "\t"));
}

module.exports = createFile;
