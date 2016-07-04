#!/usr/bin/env node

var Client = require('node-rest-client').Client;
var program = require('commander');

// configure basic http auth for every request 
// var options_auth = { user: "admin", password: "123" };
 
// var client = new Client(options_auth);

var client = new Client();

var endpoint = "http://localhost:3000/api/v1/${resource}"

program
  .arguments('<resource> [id/username]')
  .option('-p, --page <page #>', 'The page of the response (0 >)')
  .option('-n, --perpage <# records>', 'The number of records per page')
  .action(function(resource, id) {

    if (!program.page) {
      page = 1
    } else {
      page = program.page
    }

    if (!program.perpage) {
      per_page = 20
    } else {
      per_page = program.perpage
    }

    args = {
      path: { "resource": resource }, // path substitution var
      parameters: { page: page, per_page: per_page }, // query parameter substitution vars
    };

    // if a resource id is passed, fetch the single resource
    if (typeof(id) != "undefined") {
      endpoint += "/${id}";
      args.path.id = id
      delete args.parameters
    }
    
    client.get(endpoint, args, function (data, response) {
      console.log(data);
    });
  });

program.parse(process.argv);
