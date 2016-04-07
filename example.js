"use strict";
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open("http://soundcloud.com/technocat", function(status) {
    if (status === "success") {
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
            page.evaluate(function() {
                // console.log("$(\".explanation\").text() -> " + $(".explanation").text());
                $('.sc-button-xlarge').click()
                $('.header__mainMenu-collection').click()

                var name = $('.profileHeaderInfo__additional').text()
                console.log('button clicked');
                console.log(name + ' name');
            });
            page.render('swerve.png')
            phantom.exit(0);
        });
    } else {
      phantom.exit(1);
    }
});
