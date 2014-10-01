module.exports = function(grunt) {
  grunt.config("validation", {
    options: {
      reset: grunt.option('reset') || false,
      stoponerror: false,
    },
    files: {
      src: "pages/*.html"
    }
  });

  return grunt.loadNpmTasks('grunt-html-validation');
};
