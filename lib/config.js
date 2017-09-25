'use strict';

const rr = require('./neat-rr');
const send = require('./lib/send.js');
const {
  extend
} = require('./lib/utils.js');

const noop = () => {};
// opts, ext is common static; prefer than send_opts & send_ext;
// get RR is for opt, is dynamic;
// send_opts, send_ext is dynamic;
module.exports = (opts, ext) => (send_opts = {}, send_ext = {}) => {
  const getRR = ext.rr ? rr(ext.rr) : noop;
  send(extend(send_opts, getRR(), opts), extend(send_ext, ext))
}