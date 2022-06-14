const Sequelize = require('sequelize');
const db = require('../db/connection');

const Evento = db.define('evento', {
    title: {
        type: Sequelize.STRING,
    },
    value: {
        type: Sequelize.INTEGER,
    },
    site: {
        type: Sequelize.TEXT,
    },
    date: {
        type: Sequelize.INTEGER,
    },
    new_evento: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
});

module.exports = Evento
