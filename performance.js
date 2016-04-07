var page = require('webpage').create();
var t = Date.now();

page.open("http://alexbennett.tech/", function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    console.log('not freaking out');
    t = Date.now() - t;
    console.log('Loading ');
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});
