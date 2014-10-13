var livereloadMiddleware, lrSnippet;

lrSnippet = require("connect-livereload")({
  port: 35729
});

module.exports = function(grunt) {
  grunt.config("connect", {
    server: {
      options: {
        port: 5000,
        hostname: 'localhost',
        base: "dist/",
        livereload: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
};

