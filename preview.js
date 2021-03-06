var marked = require('marked');
var fs = require('fs');
var TerminalRenderer = require('marked-terminal');

// Example showing usage information from a CLI tool.

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

// Show the parsed data
console.log(marked(fs.readFileSync(__dirname + "/README.md").toString()));
