# kiss-argv
Simple, stupid ARVG parsing.

# Installation
npm install kiss-argv

# Example

parseme.js 

    "use strict";
    var argv = require('kiss-argv');

node parseme.js --hello world --array one two three --sentence "yeah yeah one two"

    { hello: 'world',
      array: [ 'one', 'two', 'three' ],
      sentence: 'yeah yeah one two' }

That's it.

# Contributing
Open an issue if things don't work right.
