module.exports = function(grunt) {
  grunt.config("copy", {
    main: {
      expand: true,
      cwd: "pages/",
      src: "*.html",
      dest: "dist/"
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-copy');
}
