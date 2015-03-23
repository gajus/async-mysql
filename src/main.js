'use strict';

let amysql = {},
    mysql = require('mysql'),
    asyncConnection;

amysql.connect = async (config) => {
    return new Promise(function (resolve, reject) {
        let db,

        db = mysql.createConnection(config);

        db.connect((err) => {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(asyncConnection(db));
            }
        });
    });
};

asyncConnection = function (db) {
    let connection = {};

    /**
     * @param {String} sql
     * @param {Array} values
     */
    connection.query = async (sql, values) => {
        return new Promise(function (resolve, reject) {
            db.query(sql, values, function (err, rows) {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(rows);
                }
            });
        });
    };

    /**
     *
     */
    connection.end = async () => {
        db.end(function (err) {
            if (err) {
                throw new Error(err);
            }
        });
    };

    return connection;
};

module.exports = amysql;
