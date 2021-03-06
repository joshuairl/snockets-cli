// Generated by CoffeeScript 1.3.3
/*!
* Snockets command-line interface.
*
* Joshua F. Rountree <rountrjf@uc.edu>
* MIT License.
*/

/*
Dependencies.
*/

var app, commands, error, flatiron, path;

path = require("path");

flatiron = require("flatiron");

app = module.exports = require("./index");

error = console.error;

app.use(flatiron.plugins.cli, {
  usage: ["Snockets from the CLI.", "", "Usage: snockets <command>"],
  source: path.join(__dirname, "commands"),
  argv: {}
});

commands = require("./commands");

app.cmd(/watch ([^\s]+) ([^\s]+)/, commands.watch);

app.cmd(/version/, commands.version);

/*
Handles exceptions.
*/


process.on("uncaughtException", function(err) {
  error(err.message);
  return process.exit(1);
});
