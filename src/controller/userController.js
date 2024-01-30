const userModel = require('../models/userModel.js');

async function createUser(req, res) {
    try {
        const user = await userModel.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getUser(req, res) {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { createUser, getUser };
