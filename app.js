const faker = require("faker");
const fs = require("fs");
const names = require("./catalog/latam_names");
const last_names = require("./catalog/latam_last_names");

function generateFirstName() {
    return names[Math.round(Math.random() * names.length - 1)];
}

function generateLastName() {
    return last_names[Math.round(Math.random() * last_names.length - 1)];
}

function generate(cantidadDeElementos) {
    const data = [];

    for (let i = 0; i < cantidadDeElementos; i++) {
        data.push({
            id: faker.random.uuid(),
            nombre: generateFirstName(),
            apellido_paterno: generateLastName(),
            apellido_materno: generateLastName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
        });
    }

    return {
        data,
    };
}

function crearArchivo(nombre, tipo_de_archivo, data) {
    fs.writeFileSync(
        `${nombre}.${tipo_de_archivo}`,
        JSON.stringify(data, null, "\t")
    );
}

//* datos
const data = generate(20);
//* generar el archivo
crearArchivo("usuarios", "json", data);
