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

    connection = await mysql.connect({
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
};

main();
```
