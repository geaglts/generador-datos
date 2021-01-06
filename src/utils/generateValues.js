const latamNames = require("../catalog/latam_names");
const lastLatamName = require("../catalog/latam_last_names");

function generateFirstName() {
    return latamNames[Math.round(Math.random() * latamNames.length - 1)];
}

function generateLastName() {
    return lastLatamName[Math.round(Math.random() * lastLatamName.length - 1)];
}

module.exports = {
    generateFirstName,
    generateLastName,
};
