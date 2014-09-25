module.exports = function(grunt) {
  grunt.config("copy", {
    main: {
      src: "patterns/pages/*",
      dest: "dist/static/"
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-copy');
}
