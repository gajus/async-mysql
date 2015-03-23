# async-mysql

[![NPM version](http://img.shields.io/npm/v/async-mysql.svg?style=flat)](https://www.npmjs.org/package/async-mysql)
[![Travis build status](http://img.shields.io/travis/gajus/async-mysql/master.svg?style=flat)](https://travis-ci.org/gajus/async-mysql)
[![Dependency Status](https://david-dm.org/gajus/async-mysql.svg?style=flat)](https://david-dm.org/gajus/async-mysql)

async-mysql is a wrapper for [mysql](https://www.npmjs.com/package/mysql) that uses [ES7 async functions](https://github.com/lukehoban/ecmascript-asyncawait).

## Usage

```js
let main;

// async/await can be used only within an async function.
main = async () => {
    let mysql = require('async-mysql'),
        connection,
        rows;

    // async connect is the equivalent of calling mysql.createConnection and
    // mysql.connect, and obtaining the connection handle.
    // async connect options are passed to mysql.createConnection.
    connection = mysql.createConnection({
        host: 'localhost'
    });

    rows = await connection.query('SELECT 1');
    // [{'1': 1}]

    try {
        await connection.query('INVALID_QUERY');
    } catch (e) {
        e;
        // [Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INVALID_QUERY' at line 1]
    }

    await connection.end();
};

main();
```

## Running

Async function behavior has been accepted into stage 1 ("Proposal") of the ECMASCript 7 spec process in January 2014. This means that it cannot be used out of the box with node.js or iojs without a transpiler.

This library is using [Babel](https://babeljs.io/) to compile ES7 code into ES5. Refer to the [./gulpfile.js](./gulpfile.js).

## Beware

This library has been created as part of [ES7 async function](https://github.com/lukehoban/ecmascript-asyncawait) proposal research. It covers basic use of [mysql](https://www.npmjs.com/package/mysql). I do not advise to use it in production, though I will be testing it in several private projects and update as I go – contributions are welcome too.
