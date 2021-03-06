var Jasmine = require("jasmine");
var HtmlReporter = require("jasmine-pretty-html-reporter").Reporter;
var jasmine = new Jasmine();
const path = require("path");

jasmine.loadConfigFile("./spec/support/jasmine.json");

// options object
jasmine.addReporter(
  new HtmlReporter({
    path: path.join(__dirname, "results"),
  })
);

jasmine.execute();
