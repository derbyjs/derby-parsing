var EventEmitter = require('events').EventEmitter;
var templates = require('derby-templates');

var markup = module.exports = new EventEmitter();

// TODO: Should be its own module

markup.on('element:a', function(template) {
  console.log(template)
});

markup.on('element:input', function(template) {
  console.log(template)
});
