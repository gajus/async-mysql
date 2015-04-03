'use strict';

let chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised'),
    mysql = require('../src/main.js');

chai.use(chaiAsPromised);

if (!process.env.MYSQL_HOST) {
    throw new Error('Must set the MYSQL_HOST environment variable.');
}

// MYSQL_HOST=localhost MYSQL_USER=root MYSQL_PASSWORD=test MYSQL_DATABASE=test gulp watch

describe('mysql.connect()', () => {
    it('it connects to the database', () => {
        return mysql.connect({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
    });
    describe('if connection cannot be established', () => {
        it('throws an error', () => {
            let connection;

            connection = mysql.connect({
                host: 'INVALID_HOST'
            });

            return expect(connection).to.rejectedWith(Error, 'Error: getaddrinfo ENOTFOUND INVALID_HOST INVALID_HOST:3306');
        });
    });
});

describe('connection.query()', () => {
    let connection;

    beforeEach(() => {
        return mysql
            .connect({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            })
            .then((db) => {
                connection = db;
            })
    });

    it('makes a query and return results', () => {
        let rows = connection.query('SELECT 1');

        expect(rows).to.eventually.deep.equal([{'1': 1}]);
    });

    describe('if query cannot be made', () => {
        it('throws an error', () => {
            let query;

            query = connection.query('INVALID_QUERY');

            return expect(query).to.rejectedWith(Error, 'Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'INVALID_QUERY\'');
        });
    });
});
