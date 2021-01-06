const {
    generateFirstName,
    generateLastName,
} = require("../utils/generateValues");

const faker = require("faker");

class User {
    id = "";
    nombre = "";
    apellidoPaterno = "";
    apellidoMaterno = "";
    password = "";
    email = "";

    constructor(id) {
        this.id = id;
        this.nombre = generateFirstName()?.toLowerCase();
        this.apellidoPaterno = generateLastName()?.toLowerCase();
        this.apellidoMaterno = generateLastName()?.toLowerCase();
        this.password = faker.internet.password();
        this.email = `${this.apellidoMaterno}.${this.apellidoPaterno}.${id}@gmail.com`.toLowerCase();
    }

    toJSON() {
        const user = {
            id: this.id,
            nombre: this.nombre,
            apellidoPaterno: this.apellidoPaterno,
            apellidoMaterno: this.apellidoMaterno,
            password: this.password,
            email: this.email,
        };

        return user;
    }
}

module.exports = User;
