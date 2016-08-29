module.exports = function(grunt) {
  grunt.config("copy", {
    main: {
      files: [
        {expand: true, cwd: "pages/", src: "*.html", dest: "dist/"},
        {expand: true, cwd: "img/", src: "*", dest: "dist/img"},
        {expand: true, cwd: "Fonts/", src: "**/*", dest: "dist/Fonts"}
      ]
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-copy');
}
