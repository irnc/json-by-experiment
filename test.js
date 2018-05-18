'use strict';

const assert = require('assert');

// TODO find out why
assert.equal(JSON.stringify(new Error('test')), '{}');
