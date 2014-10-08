module.exports = function(grunt) {
  grunt.config("grunticon", {
    icons: {
      files: [
        {
          expand: true,
          cwd: 'grunticon/',
          src: ["*.svg", ".png"],
          dest: 'dist/grunticon'
        }
      ]
    }
  });
  return grunt.loadNpmTasks('grunt-grunticon');
};
