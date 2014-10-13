module.exports = function(grunt) {
  grunt.config("watch", {
    stylesheets: {
      files: "scss/**/*",
      tasks: "sass"
    },
    livereload: {
      files: "dist/css/**/*.css",
      options: {
        livereload: true
      }
    },
    pages: {
      files: "pages/**/*.html",
      tasks: ["buildProduction"],
      options: {
        livereload: true
      }
    },
    javascript: {
      files: ["coffee/*", "js/*.js", "!js/_bower-libs.js", "js/other-libs/*.js", "js/other-js/*.js"],
      tasks: "javascript",
      options: {
        livereload: true
      }
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-watch');
};
