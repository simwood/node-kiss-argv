module.exports = (params...) ->

  removeThis = '__removeThis__' + Math.random()
  current = removeThis

  if params.length is 0
    params = process.argv

  if params.length is 1 and _.isObject params[0]
    query = params[0]
  
  else
    query = {}
    while params.length
      nextArg = params.shift()
      if nextArg.match /^--/
        nextArg = nextArg.replace /^--/, ''
        current = nextArg
        query[current] = true
      else
        if typeof query[current] is typeof true and query[current]
          query[current] = nextArg
        else if Array.isArray query[current]
          query[current].push nextArg
        else
          query[current] = [ query[current] ]
          query[current].push nextArg

  delete query[removeThis]
  return query