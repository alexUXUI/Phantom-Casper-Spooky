var page = require('webpage').create();
var loadInProgress = false;
var testindex = 0;
var repeat = 100;

page.onConsoleMessage = function(msg) {
  console.log(msg);
};
page.onAlert = function(msg) {
  console.log('alert!!> ' + msg);
};
page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("Playing Tates Songs!");
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
    page.open('http://www.soundcloud.com/technocat');
  },
  function() {
    page.injectJs("jquery1-11-1min.js");
  },
  function() {
    page.injectJs("jquery1-11-1min.js");
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
  },
  function() {
    for(i = 0; i < 100; i = i + 1){
      page.evaluate(function() {
        document.querySelector('.sc-button').click()
      });
    }
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
}, 15000);

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
//   if (status !== 'success') {
//     console.log('Unable to access network');
//   } else {
//     // page.evaluate(function() {
//     // console.log('about to click the button');
//     document.getElementsByClassName(".sc-button-play")
//     // console.log('clicked the button');
//     var title = page.evaluate(function(){
//       return document.title
//     })
//     console.log('page name is: ', title);
//     setTimeout(function () {
//       console.log('taking another picture');
//       page.render("speed.png");
//       phantom.exit();
//     }, 20000);
//   }
//   console.log('taking picture');
//   page.render('agb3.png')
//   phantom.exit();
// });
