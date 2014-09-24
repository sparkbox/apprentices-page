var livereloadMiddleware, lrSnippet;

lrSnippet = require("connect-livereload")({
  port: 35729
});

// livereloadMiddleware = function(connect, options) {
//   return [lrSnippet, connect.static(options.base), connect.directory(options.base)];
// }

module.exports = function(grunt) {
  grunt.config("connect", {
    options: {
      port: 5000,
      hostname: 'localhost',
      base: "dist/",
      livereload: true
    }
    //   options: {
    //     middleware: livereloadMiddleware
    //   }
    // }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
};

