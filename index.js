'use strict';

const send = require('./lib/send.js');
const createRequest = require('./lib/createRequest.js');

module.exports = send;
module.exports.createRequest = createRequest;