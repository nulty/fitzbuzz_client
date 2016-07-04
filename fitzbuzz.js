#!/usr/bin/env node

var program = require('commander');

// configure basic http auth for every request 
// var options_auth = { user: "admin", password: "123" };
 
// var client = new Client(options_auth);


program
  .version('0.0.1')
  .command('users [username]', 'install one or more packages')
  // .demand(1, "must provide a valid command")
  // .command('fizzbuzzs [number]', 'get fizzbuzzs')
  // .command('favourites  [username]', 'list users favourite fizzbuzzs', {isDefault: true})
  .parse(process.argv);

// program.parse(process.argv);
