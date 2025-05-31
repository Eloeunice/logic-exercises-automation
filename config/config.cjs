const dotenv = require("dotenv");

dotenv.config()


module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres' // ou 'postgres', etc.
    },
    test: {
        // pode ser igual ao development ou usar um banco de teste separado
    },
    production: {
        // dados de produção
    }
};
