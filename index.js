// Generated by CoffeeScript 1.10.0
(function() {
  var slice = [].slice;

  module.exports = function() {
    var current, nextArg, params, query, removeThis;
    params = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    removeThis = '__removeThis__' + Math.random();
    current = removeThis;
    if (params.length === 0) {
      params = process.argv;
    }
    if (params.length === 1 && _.isObject(params[0])) {
      query = params[0];
    } else {
      query = {};
      while (params.length) {
        nextArg = params.shift();
        if (nextArg.match(/^--/)) {
          nextArg = nextArg.replace(/^--/, '');
          current = nextArg;
          query[current] = true;
        } else {
          if (typeof query[current] === typeof true && query[current]) {
            query[current] = nextArg;
          } else if (Array.isArray(query[current])) {
            query[current].push(nextArg);
          } else {
            query[current] = [query[current]];
            query[current].push(nextArg);
          }
        }
      }
    }
    delete query[removeThis];
    return query;
  };

}).call(this);
