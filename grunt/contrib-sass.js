module.exports = function(grunt) {
  grunt.config("sass", {
    dist: {
      files: {
        'dist/css/mqs.css' : 'scss/mqs.scss'
      }
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-sass');
};
