// Simulando um banco de dados simples em memória
const users = {};

function create(userData) {
    const id = Date.now().toString();
    users[id] = { ...userData, id };
    return Promise.resolve(users[id]);
}

function findById(id) {
    return Promise.resolve(users[id] || null);
}

module.exports = { create, findById };
