// sample.js
// Create an casper instance
var casper = require('casper').create();

//we started it and opened http://google.com/
casper.start('http://google.com/', function() {

});

//once the page has been loaded, we asked to print the title of that webpage (the content of its <title> tag)

casper.then(function(){
this.echo('The Title of the Page is:'+ this.getTitle(), 'INFO');
});

//we executed the whole process
casper.run();
