var http = require('http');
var phantom = require('phantomjs');
var page = require('webpage').create();
var loadInProgress = false;
var testindex = 0;

phantom.create(function (ph) {
  ph.createPage(function (page) {
    http.createServer(function (req, res) {
      // TODO: parse `request` and determine where to go
      page.open('http://soundcloud.com/tatetucker', function (status) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        // TODO: do something on the page and generate `result`
        page.onConsoleMessage = function(msg) {
          console.log(msg);
        };
        page.onAlert = function(msg) {
          console.log('alert!!> ' + msg);
        };
        page.onLoadStarted = function() {
          loadInProgress = true;
          console.log("load started");
        };
        page.onLoadFinished = function(status) {
          loadInProgress = false;
          if (status !== 'success') {
            console.log('Unable to access network');
            phantom.exit();
          } else {
            console.log("load finished");
          }
        };

        var steps = [
          function() {
              page.open('http://www.soundcloud.com/tatetucker');
          },
          function() {
            page.injectJs("jquery1-11-1min.js");
            page.evaluate(function() {
                document.getElemenstByClassName('sc-button')
                console.log('JQ: ' + $().jquery);
                $('sc-button').click();
                console.log('Clicked');
            });
          },
          function() {
            page.injectJs("jquery1-11-1min.js");
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
            page.evaluate(function() {
              $('.sc-button').click();
            });
          },
          function() {
              console.log('Exiting');
          }
        ];

        interval = setInterval(function() {
          if (!loadInProgress && typeof steps[testindex] == "function") {
            console.log("step " + (testindex + 1));
            steps[testindex]();
            testindex++;
          }
          if (typeof steps[testindex] != "function") {
            console.log("test complete!");
            phantom.exit();
          }
        }, 5000);
        res.end(result);
      });
    }).listen(8080);
  });
});
