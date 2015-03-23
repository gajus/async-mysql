# async-mysql

async-mysql is a wrapper for [mysql](https://www.npmjs.com/package/mysql) that uses ES7 async functions.

```js
let mysql = require('async-mysql'),
    connection,
    rows;

connection = await mysql.connect({
    host: 'localhost'
});

rows = await connection.query('SELECT 1');

console.log('rows', rows);

// [1]
```
