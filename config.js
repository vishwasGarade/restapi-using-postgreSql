const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, USER, PASSWORD, DATABASE, SERVER, DBPORT} = process.env;


assert(PORT, 'PORT is required');
assert(HOST, "HOST is required");

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    postgreSql:{
        user: USER,
        password: PASSWORD,
        host: SERVER,
        port: DBPORT, // default Postgres port
        database: DATABASE
    }
}