'use strict';

let chai,
    expect,
    mysql;

chai = require('chai');
expect = chai.expect;
mysql = require('../src/main.js');

describe('mysql.foo', () => {
    it('returns FOO', async () => {
        expect(await mysql.foo()).to.equal('FOO');
    });
});
