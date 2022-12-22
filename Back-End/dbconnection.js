var mysql = require("mysql");

//Tạm thời sẽ dùng callback cho các controller image, schedule, tour
//Các controller khác ta sẽ dùng mysql with Promise code trong file dbconnectMySql.js

const config = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "dnloster",
    database: "travelapp",
};
// const configHerokuTest = {
//     host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: "vke6ut5wnkjh7y47",
//     port: "3306",
//     password: "x18ifcnupo42ey8j",
//     database: "travelapp",
// };
// const configProduction = {
//     host: process.env.JAWSDB_HOST,
//     user: process.env.JAWSDB_USERNAME,
//     port: process.env.JAWSDB_PORT,
//     password: process.env.JAWSDB_PASSWORD,
//     database: process.env.JAWSDB_DATABASE,
// };
const connection = mysql.createConnection(config);

module.exports = connection;
