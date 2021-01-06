const generateUsers = require("./methods/generateUsers");
const createFile = require("./utils/createFile");

const generatedData = generateUsers(20);
createFile("usuarios", "json", generatedData);
