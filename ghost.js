/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */

"use strict";
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 7000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (new Date().getTime() + maxtimeOutMillis) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 250); //< repeat check every 250ms
};


var page = require('webpage').create();

// Open Twitter on 'sencha' profile and, onPageLoad, do...
page.open("http://soundcloud.com/technocat", function (status) {
    // Check for page load success
    if (status !== "success") {
        console.log("Unable to access network");
    } else {
        // Wait for 'signin-dropdown' to be visible
        waitFor(function() {
            // Check in the page if a specific element is now visible
            return page.evaluate(function() {
                return true;
            });
        }, function() {
           console.log("The sign-in dialog should be visible now.");
           page.render('technocat.png')
           phantom.exit();
        });
    }
});






/// MEEEEDIUM OLD CODE


// var page = require('webpage').create();
// var loadInProgress = false;
// var testindex = 0;
//
// page.onConsoleMessage = function(msg) {
//   console.log(msg);
// };
// page.onAlert = function(msg, error) {
//   console.log(msg);
// };
// page.onLoadStarted = function() {
//   loadInProgress = true;
//   console.log("Playing songs!");
// };
// page.onLoadFinished = function(status) {
//   loadInProgress = false;
//   if (status !== 'success') {
//     console.log('Unable to access network');
//     phantom.exit();
//   } else {
//     console.log("load finished");
//   }
// };
//
// var steps = [
//   function() {
//     page.open('http://www.soundcloud.com/technocat');
//   },
//   function() {
//     console.log('add jquery');
//     page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js");
//   },
//   function() {
//       // window.setTimeout(function(){
//         page.render('soundcloud.png')
//       // }, 1000)
//     },
//   //   function clickBtn(){
//   //     try {
//   //       for(var i = 0; i < 100; i = i + 1){
//   //         // document.getElementsByClassName('sc-button-play').click()
//   //         console.log('clicked button');
//   //       }
//   //     } catch(e){
//   //       console.log('did not click button');
//   //       console.log(e);
//   //     }
//   //   }
//   // },
//   function() {
//     page.evaluate(function() {
//       console.log('do some more things');
//     });
//   },
//   function() {
//     console.log('Exiting');
//   }
// ];
//
// interval = setInterval(function() {
//   if (!loadInProgress && typeof steps[testindex] == "function") {
//     console.log("step " + (testindex + 1));
//     steps[testindex]();
//     testindex++;
//   }
//   if (typeof steps[testindex] != "function") {
//     console.log("test complete!");
//     phantom.exit();
//   }
// }, 50);

///////////////////////////////////////////
// Old Code: //////////////////////////////
///////////////////////////////////////////
// var page = require('webpage').create();
// var $ = require('jquery')
// page.onLoadStarted = function() {
//   loadInProgress = true;
//   console.log("load started");
// };
// page.onLoadFinished = function() {
//   loadInProgress = false;
//   console.log("load finished");
// };
// page.open('https://soundcloud.com/tatetucker', function(status) {
//   page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
//     var steps = [
//       // function() {
//       //   page.open('http://www.soundcloud.com/technocat');
//       // },
//       function() {
//         page.injectJs("jquery1-11-1min.js");
//       },
//       function() {
//         page.injectJs("jquery1-11-1min.js");
//       },
//       function() {
//         page.evaluate(function() {
//           document.querySelector('.sc-button').click()
//         });
//       },
//       function() {
//         console.log('Exiting');
//       }
//     ];
//
//     interval = setInterval(function() {
//       if (!loadInProgress && typeof steps[testindex] == "function") {
//         console.log("step " + (testindex + 1));
//         steps[testindex]();
//         testindex++;
//       }
//       if (typeof steps[testindex] != "function") {
//         console.log("test complete!");
//         phantom.exit();
//       }
//     }, 50);
//   }
//
//
//   var title = page.evaluate(function(){
//     return document.title
//   })
//   console.log('page name is: ', title);
//   }
//   console.log('taking picture');
//   page.render('agb3.png')
//   phantom.exit();
// });
