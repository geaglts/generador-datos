const User = require("../classes/User");

function generateUsers(numberOfElements = 0) {
    const data = [];

    for (let i = 0; i < numberOfElements; i++) {
        const userGenerated = new User(i + 1);
        data.push(userGenerated);
    }

    return {
        data,
    };
}

module.exports = generateUsers;
