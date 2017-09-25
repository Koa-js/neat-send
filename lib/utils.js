'use strict';

module.exports.extend = function extend(to, ...froms) {
  for (let from of froms) {
    if (!from) continue;
    for (let key in from) {
      to[key] = from[key];
    }
  }
  return to;
}