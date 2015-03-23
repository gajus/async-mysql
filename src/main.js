'use strict';

let mysql = {};

mysql.foo = async function () {
    return new Promise((resolve) => {
        setImmediate(function () {
            resolve('FOO');
        });
    });
};

module.exports = mysql;
