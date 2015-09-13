var assert = require("assert");
var File = require("vinyl");
var erotimatiko = require("./");

describe("gulp-erotimatiko", function () {
  it("wreak havoc", function (done) {
    var stream = erotimatiko();

    stream.on('data', function (data) {
      var string = data.contents.toString();

      assert.equal(string.charCodeAt(string.length - 1), 894);
      done();
    });

    stream.write(new File({
      contents: new Buffer('var foo = "bar";')
    }));
  });
});
