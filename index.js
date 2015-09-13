var through = require('through2');

module.exports = function () {
  return through.obj(function (file, enc, cb) {
    file.contents = new Buffer(
      file.contents
        .toString()
        .replace(/;/g, ';')
    );

    cb(null, file);
  });
};
